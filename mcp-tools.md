
# Available MCP Tools

Based on your current configuration (****), you have access to the following tools:

## File System & Navigation Tools
- **list_directory**: Explore project structure and file organization
- **read_file**: Examine source code, configurations, and documentation
- **edit_file**: Make precise, targeted changes to existing files
- **write_file**: Create new files when needed
- **search_files**: Find files by name or pattern
- **delete_file**: Remove unnecessary or outdated files

## Code Analysis & Search Tools
- **codebase_search**: Semantic search through code by meaning and context
- **grep_search**: Fast exact text and regex pattern matching
- **file_search**: Fuzzy filename matching for quick file location

## Terminal & Process Tools
- **run_terminal_cmd**: Execute shell commands, run builds, tests, and deployments
- **Capability**: Full command-line access for development workflows
- **Use Case**: Build systems, testing, package management, and tool execution

## Web Research Tools (if available)
- **brave_web_search**: Search the web for current information and best practices
- **Capability**: Access real-time information beyond AI training cutoff
- **Use Case**: Research latest library versions, security updates, and emerging patterns

## GitHub Integration Tools (if available)
- **github_create_pull_request**: Submit code changes for review
- **github_list_pull_requests**: Review existing PRs and their status
- **Capability**: Full GitHub workflow integration
- **Use Case**: Automated PR creation, status tracking, and team collaboration

## Kubernetes Tools (if available)
- **kubernetes_listResources**: Query cluster state and resources
- **kubernetes_describeResource**: Get detailed resource information
- **Capability**: Direct cluster introspection and management
- **Use Case**: Deploy, monitor, and troubleshoot containerized applications

## Memory & State Tools (if available)
- **memory_create/update/delete**: Manage persistent information across conversations
- **Capability**: Store and retrieve context that persists between sessions
- **Use Case**: Remember project preferences, previous decisions, and learned patterns

---

## Tool Usage Guidelines

### Risk Assessment
- **Low Risk**: `read_file`, `list_directory`, `search_files` - Safe exploration tools
- **Medium Risk**: `edit_file`, `write_file` - Modify local files with backup capability
- **High Risk**: `run_terminal_cmd`, `delete_file` - Irreversible system operations
- **Remote Risk**: Web search, API calls - External dependencies and rate limits

### Best Practices

1. **Start with Low-Risk Tools**: Always begin with `read_file` and `list_directory`
2. **Understand Before Acting**: Read existing code before making any changes
3. **Verify Changes**: Use `read_file` to confirm edits worked as expected
4. **Progressive Enhancement**: Use higher-risk tools only when necessary
5. **Document Decisions**: Explain tool choices in your implementation notes
6. **Use Remote Tools Wisely**: Leverage web search and specialized APIs for current information

## Common Tool Workflows

### Understanding Unfamiliar Code
1. `list_directory` → Explore project structure
2. `read_file` → Examine key files (package.json, README, main modules)
3. `codebase_search` → Find relevant patterns and implementations
4. `brave_web_search` → Research unfamiliar patterns or libraries

### Making Code Changes
1. `read_file` → Understand current implementation
2. `edit_file` → Make targeted, precise changes
3. `read_file` → Verify changes were applied correctly
4. `run_terminal_cmd` → Test, build, or validate changes (if needed)

### Research & Documentation
1. `brave_web_search` → Find current best practices and documentation
2. `codebase_search` → Find existing patterns in the project
3. `read_file` → Study specific implementation details
4. `write_file` → Document findings and decisions

### Deployment & Infrastructure
1. `kubernetes_listResources` → Check current cluster state
2. `terraform_searchModules` → Find appropriate infrastructure modules
3. `github_create_pull_request` → Submit changes for review

Remember: **Always explain your tool choices** and **verify the results** of any changes you make. The goal is reliable, well-tested implementations that follow project standards.
