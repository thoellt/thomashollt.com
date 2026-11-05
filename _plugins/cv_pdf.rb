# Compiles the generated CV (_site/cv/cv.tex) into _site/cv/cv.pdf after every build, so the PDF is there
# with `jekyll build` and `jekyll serve` alike (Jekyll removes files it did not write, so it has to be redone each time).
# The PDF is only recompiled when cv.tex changed; otherwise the cached copy from .jekyll-cache is used.
# Without lualatex, or when LaTeX fails, local builds only warn; production builds (the deploy) stop with an error.
require "digest"
require "fileutils"
require "yaml"

# `jekyll serve` replaces site.url with http://localhost:4000; the CV always links to the real site,
# so keep the url from _config.yml as site.production_url (used in cv.tex and _includes/latex/).
Jekyll::Hooks.register :site, :after_init do |site|
  config = File.join(site.source, "_config.yml")
  url = File.exist?(config) ? (YAML.safe_load_file(config) || {})["url"] : nil
  site.config["production_url"] = url || site.config["url"]
end

Jekyll::Hooks.register :site, :post_write do |site|
  tex = File.join(site.dest, "cv", "cv.tex")
  next unless File.exist?(tex)

  pdf        = File.join(site.dest, "cv", "cv.pdf")
  cache_dir  = File.join(site.source, ".jekyll-cache", "cv-pdf")
  cached_pdf = File.join(cache_dir, "cv.pdf")
  cached_sum = File.join(cache_dir, "cv.tex.sha256")
  sum        = Digest::SHA256.file(tex).hexdigest
  production = Jekyll.env == "production"

  if File.exist?(cached_pdf) && File.exist?(cached_sum) && File.read(cached_sum) == sum
    FileUtils.cp(cached_pdf, pdf)
    next
  end

  unless system("command -v lualatex > /dev/null 2>&1")
    raise "CV PDF: lualatex not found" if production
    Jekyll.logger.warn "CV PDF:", "lualatex not found, skipping cv.pdf"
    next
  end

  output = `bash "#{File.join(site.source, "_latex", "build.sh")}" "#{site.dest}" 2>&1`
  if $?.success?
    FileUtils.mkdir_p(cache_dir)
    FileUtils.cp(pdf, cached_pdf)
    File.write(cached_sum, sum)
    Jekyll.logger.info "CV PDF:", "wrote cv/cv.pdf"
  else
    Jekyll.logger.error "CV PDF:", output
    raise "CV PDF: LaTeX failed" if production
    Jekyll.logger.warn "CV PDF:", "LaTeX failed, skipping cv.pdf"
  end
end
