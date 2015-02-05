#
# Targets
#

.PHONY: all css download
all: css

#
# CSS
#

CSS_SRC_FILES=$(shell find $(src-css) -type f -name '*.styl')

css: css/flycart.css

css/flycart.css: src-css/js-flycart.styl $(CSS_SRC_FILES)
	cd src-css; cat js-flycart.styl | stylus > ../css/flycart.css

download: download/flycart.tar.gz

download/flycart.tar.gz: css
	@echo TODO
