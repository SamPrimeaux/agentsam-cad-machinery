-- Local-dev fixture only: the CMS tables the CAD worker reads, mirrored from
-- production minus cross-table foreign keys. Never applied to production.
CREATE TABLE IF NOT EXISTS cms_sites (
  id TEXT PRIMARY KEY DEFAULT ('site_' || lower(hex(randomblob(8)))),
  account_id TEXT NOT NULL, name TEXT NOT NULL, slug TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','active','archived')),
  primary_domain TEXT, domain_aliases_json TEXT NOT NULL DEFAULT '[]',
  settings_json TEXT NOT NULL DEFAULT '{}',
  created_at TEXT NOT NULL DEFAULT (datetime('now')), updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  is_default INTEGER NOT NULL DEFAULT 0, UNIQUE (account_id, slug));
CREATE UNIQUE INDEX IF NOT EXISTS idx_cms_sites_domain ON cms_sites(primary_domain) WHERE primary_domain IS NOT NULL;
CREATE TABLE IF NOT EXISTS cms_pages (
  id TEXT PRIMARY KEY, site_id TEXT NOT NULL, slug TEXT NOT NULL, route_path TEXT NOT NULL,
  page_type TEXT NOT NULL DEFAULT 'page', title TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','published','archived')),
  seo_json TEXT NOT NULL DEFAULT '{}', metadata_json TEXT NOT NULL DEFAULT '{}',
  definition_id TEXT, template_sku TEXT, requires_auth INTEGER NOT NULL DEFAULT 0,
  nav_visible INTEGER NOT NULL DEFAULT 1, sort_order INTEGER NOT NULL DEFAULT 0,
  published_manifest_object_key TEXT, published_at INTEGER,
  created_at INTEGER NOT NULL DEFAULT (unixepoch()), updated_at INTEGER NOT NULL DEFAULT (unixepoch()),
  content_object_key TEXT, UNIQUE (site_id, slug), UNIQUE (site_id, route_path));
CREATE TABLE IF NOT EXISTS cms_globals (
  id TEXT PRIMARY KEY DEFAULT ('cmsg_' || lower(hex(randomblob(8)))),
  account_id TEXT NOT NULL, site_id TEXT NOT NULL, global_key TEXT NOT NULL, global_type TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'draft', inline_content_json TEXT NOT NULL DEFAULT '{}',
  content_object_key TEXT, content_version INTEGER NOT NULL DEFAULT 0, content_hash TEXT,
  product_id TEXT, package_version TEXT, metadata_json TEXT NOT NULL DEFAULT '{}',
  created_at TEXT NOT NULL DEFAULT (datetime('now')), updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE (site_id, global_key));
CREATE TABLE IF NOT EXISTS cms_navigation_menus (
  id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))), project_id TEXT NOT NULL, project_slug TEXT,
  menu_name TEXT NOT NULL, menu_type TEXT DEFAULT 'site', menu_items TEXT NOT NULL, is_active INTEGER DEFAULT 1,
  r2_bucket TEXT, r2_key TEXT, r2_url TEXT, s3_endpoint TEXT,
  created_at TEXT DEFAULT (datetime('now')), updated_at TEXT DEFAULT (datetime('now')),
  site_id TEXT NOT NULL, UNIQUE(project_id, menu_name));
