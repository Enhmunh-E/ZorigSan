# Writing an issue guidance

## Issue title format

```
[type] Short title
```

Task title formats:

- <verb/action> [activity] (e.g. “Perform backup”)
- <verb/action> [thing] (e.g. “Research new javascript framework”)

When implementing new features:

- Implement (e.g. Implement search engine)
- Create (e.g. Create card component)

Updates:

- Make [feature] run faster
- Improve the performance of [feature/screen/endpoint]
- Update [feature] with/to [update]
- Rename [feature/text] to [new name]

In example:

`[component] Create card component`

`[page] Create contact page`

`[doc] Update readme.md`

## Issue label format

Each issue must be have a label.

> **First label** is to indicate to what kind of work this job is intended to do.
- `enhancement`
  New feature or request
- `dependencies`
  Pull requests that update a dependency file
- `documentation`
  Improvements or additions to documentation
- `research`
  Research or work that does not create pull request
- `bug`
  Something isn't working

> **Second label** is to indicate to what the current state of affairs is. (optional)
- `blocked`
  blocked by other task or design
- `help wanted`
  Extra attention is needed
- `question`
  Further information is requested
- `wontfix`
  This will not be worked on
- `question-in-design`
  Further design information is requested

## Issue description format

- **Requirements**:
  - Please Keep titles short and descriptive.
  - Include/tag the right people in your discussion.
  - Format your messages. Use markdown syntax. Steps of work can be described with checkboxes.
  - Add useful links to you references.

# Branch naming convention

Branch name consists of 3 parts with following format:

- ID of the issue (number)
- Short description
- Hyphens must be seperators

For example: `12-api-endpont-add-content`

# Commit messages

Please keep commit message short but explicit. Prepend your action before commit message.

For example:

`Bug - Fix app crash during login`

`Feature - Implement firebase config`

`Feature - Create contact page`

# Pull request format

**Naming convention**:

- Title - Short informative summary of the pull request

**Description**:

- IssueID must be provided with `#`. For example: `#12`
- Must take screen shot or record of completed task  
- Description: More detailed explanatory text describing the PR for the reviewer. What did you solve/fixed.

Source: Gansukh