.PHONY: deps build build-semantic serve clean

SEMANTIC_SRCS=$(shell find semantic -type f \
		   -not -path "semantic/dist/*")

SHIPYARD_SRCS=$(shell find client -type f \
		   -not -path "client/bundle*") 

all: deps build

build: .shipyard_build_timestamp
.shipyard_build_timestamp: $(SHIPYARD_SRCS) semantic/dist/.semantic_build_timestamp deps
	@gulp build && \
		touch ./.shiyard_build_timestamp

build-semantic: semantic/dist/.semantic_build_timestamp
semantic/dist/.semantic_build_timestamp: $(SEMANTIC_SRCS) node_modules/.npm_install_timestamp 
	@(cd semantic && gulp build) && \
		touch ./semantic/dist/.semantic_build_timestamp

deps: node_modules/.npm_install_timestamp
node_modules/.npm_install_timestamp: package.json 
	@npm install && \
		touch ./node_modules/.npm_install_timestamp

serve: semantic/dist/.semantic_build_timestamp 
	@gulp

clean:
	@npm cache clean && \
		rm -rf bower_components && \
		rm -rf semantic/dist && \
		rm -rf build

print-%: ; @echo $* is $($*)
