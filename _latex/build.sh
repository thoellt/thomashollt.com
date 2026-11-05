#!/bin/bash
# Compiles the CV that Jekyll generated (<site>/cv/cv.tex) into <site>/cv/cv.pdf. Needs lualatex.
# Runs automatically after every Jekyll build (_plugins/cv_pdf.rb); by hand: _latex/build.sh [site dir, default _site]
set -euo pipefail
root="$(cd "$(dirname "$0")/.." && pwd)"
site="$(cd "${1:-$root/_site}" && pwd)"
build="$(mktemp -d)"
trap 'rm -rf "$build"' EXIT

cp "$site/cv/cv.tex" "$root"/_latex/*.cls "$root"/_latex/*.sty "$build/"
cd "$build"
# twice, for the page count in the footer (\pageref{LastPage}); on an error, show the end of the log
for run in 1 2; do
  lualatex -interaction=nonstopmode -halt-on-error cv.tex > /dev/null || { tail -n 40 cv.log; exit 1; }
done
grep -h "Missing character\|undefined" cv.log || true
cp cv.pdf "$site/cv/cv.pdf"
echo "wrote $site/cv/cv.pdf"
