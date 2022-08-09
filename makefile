REPO='how-to-avoid-cloud-run-sandbox-error'
DESCRIPTION='🏜 How to avoid "Container terminated due to sandbox error" in Cloud Run'

all:

github:
	gh repo create $(REPO) --public -d $(DESCRIPTION) \

gist:
	source .env && gist -u $$GIST_ID -od $(DESCRIPTION) \
		01-original/main.js \
		02-error/sub.js \
		04-avoid/script-main.js \
		04-avoid/script-sub.js \
		04-avoid/select.js
