# OLP Proposal Studio

OLP Proposal Studio is Outline Projects' browser-based proposal and service-document builder. It is designed for producing structured, client-ready A4 proposals, service agreements, statements for appointment, capability statements, Upwork proposals, schedules of services, case studies and company profiles.

## Live app

https://outline-systems.github.io/baywide-dingos-os/proposal-studio/

## Source

The deployable application is a static browser app contained in:

- `proposal-studio/index.html`

The current implementation uses HTML, CSS and vanilla JavaScript with browser `localStorage` for local workspace persistence.

## Local setup

No build step or package installation is required.

### Option 1 — open directly

Clone the repository and open the file in a browser:

```bash
git clone https://github.com/outline-systems/baywide-dingos-os.git
cd baywide-dingos-os/proposal-studio
open index.html
```

On Windows, open `index.html` manually or run:

```powershell
start index.html
```

### Option 2 — serve locally

Serving through a local HTTP server more closely matches production behaviour.

Using Python:

```bash
cd baywide-dingos-os/proposal-studio
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

Other static servers such as `npx serve`, VS Code Live Server or equivalent can also be used.

## Data and persistence

Proposal Studio stores its working data in the browser's `localStorage` under the Proposal Studio application key. This means:

- data is local to the browser/profile in use;
- clearing browser storage can remove local workspace data;
- data does not automatically synchronise between devices;
- use the built-in JSON export/import functions for backup and transfer where required.

Do not treat browser-local data as the only copy of important client records.

## PDF output

The app uses browser print output for A4 PDF generation.

Use **Print / PDF** from the document editor and select the browser's **Save as PDF** option. Print CSS defines A4 page sizing and removes the normal application navigation from the exported document.

Before issuing a client document, review the PDF output for page breaks, fee tables, headings and any project-specific content.

## Deployment

The live version is currently deployed through GitHub Pages from the `main` branch of:

```text
outline-systems/baywide-dingos-os
```

Proposal Studio is hosted from the repository subdirectory:

```text
/proposal-studio/
```

Production URL:

```text
https://outline-systems.github.io/baywide-dingos-os/proposal-studio/
```

### Deploying an update

1. Edit `proposal-studio/index.html`.
2. Test the change locally.
3. Commit the change to `main`.
4. Push to GitHub.
5. GitHub Pages will publish the updated static file from the repository's configured Pages source.
6. Verify the production URL after deployment.

Example:

```bash
git add proposal-studio/index.html proposal-studio/README.md
git commit -m "Update Proposal Studio"
git push origin main
```

## GitHub Pages configuration

The repository must have GitHub Pages enabled for the branch/path that contains this directory. The current live site confirms that Pages is publishing this repository successfully.

If the live URL stops resolving, check:

1. **Repository Settings → Pages**.
2. Confirm the configured deployment source is still valid.
3. Confirm the latest changes exist on `main`.
4. Confirm `proposal-studio/index.html` exists with the same lowercase path.
5. Check any Pages or Actions deployment status shown by GitHub.

## Current application scope

The standalone Proposal Studio includes:

- eight document starters;
- editable document metadata and narrative sections;
- standard Outline Projects proposal copy;
- service-scope presets;
- fee lines and NZD calculations;
- reusable content blocks;
- brand settings;
- document status tracking;
- document duplication and deletion;
- browser-local persistence;
- JSON backup/import;
- browser-native A4 PDF output.

## Important deployment note

This GitHub Pages build is a static, browser-local implementation. It does not provide authenticated multi-user storage or server-side access control. Do not add secrets, credentials, private API keys or confidential client data directly to the repository source.

If Proposal Studio is later moved to a dedicated repository, update this README, the Pages configuration and the production URL at the same time.
