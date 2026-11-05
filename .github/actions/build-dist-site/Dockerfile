# Our Docker image will be based on ruby:2-slim
# it is a very light docker image.
FROM ruby:3-slim
LABEL author="Thomas Höllt"
LABEL version="1.0.0"

# Lets install all dependencies
# including git and Bundler
# ENV BUNDLER_VERSION
# plus LuaLaTeX and the packages and fonts the CV uses (cv.tex, _latex/build.sh)
RUN apt-get update && \
    apt-get install --no-install-recommends -y \
    build-essential \
    ca-certificates \
    curl \
    libffi-dev \
    make \
    git \
    texlive-luatex \
    texlive-latex-recommended \
    texlive-latex-extra \
    texlive-fonts-recommended \
    fonts-lmodern \
    && gem install bundler \
    && bundle config --global silence_root_warning 1

# This is our entrypoint to our custom scripts
# more about that in a sec
COPY entrypoint.sh /

# Use the entrypoint.sh file as the container entrypoint
# when Github executes our Docker container
ENTRYPOINT ["sh", "/entrypoint.sh"]
