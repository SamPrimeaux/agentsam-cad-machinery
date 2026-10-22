# Browser QA and media capture lane for the existing AgentSam CAD runtime.
# Inherits the verified native CAD runtime; does not replace its managed service.
FROM agentsam-cad:latest
USER root
ENV PATH="/opt/node/bin:${PATH}" \
    PLAYWRIGHT_BROWSERS_PATH=/opt/agentsam-playwright/browsers \
    NODE_PATH=/opt/agentsam-playwright/node_modules
RUN mkdir -p /opt/agentsam-playwright \
 && npm install --prefix /opt/agentsam-playwright --save-exact --no-audit --no-fund playwright@1.56.1 \
 && node /opt/agentsam-playwright/node_modules/playwright/cli.js install --with-deps chromium \
 && chmod -R a+rX /opt/agentsam-playwright \
 && rm -rf /root/.npm /var/lib/apt/lists/*
USER 10001:999
