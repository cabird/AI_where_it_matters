// Chart data for interactive visualization
// Data source: paper_data.csv (extracted from paper figure using WebPlotDigitizer)
// Note: Label offsets (dx, dy) are in pixels relative to data point
// Adjust these values to prevent label overlap

window.chartData = [
  {
    task: "Coding",
    fullName: "Coding/Programming",
    category: "Development",
    z_support: 0.7207792207792201,
    z_usage: 1.525396825396825,
    labelOffset: { dx: 0, dy: -16 },
    manualReportPath: "manually_coded_reports/report-data_development_coding_programming.md",
    aiReportPath: "reports/report-development-coding_programming.md"
  },
  {
    task: "Bug Fixing",
    fullName: "Bug Fixing/Debugging",
    category: "Development",
    z_support: 0.9204545454545459,
    z_usage: 1.2253968253968253,
    labelOffset: { dx: 0, dy: 16 },
    manualReportPath: "manually_coded_reports/report-data_development_bug_fixing_debugging.md",
    aiReportPath: "reports/report-development-bug_fixing_debugging.md"
  },
  {
    task: "Refactoring",
    fullName: "Refactoring & Maintenance/Updates",
    category: "Development",
    z_support: 1.0957792207792214,
    z_usage: 0.7682539682539682,
    labelOffset: { dx: 0, dy: 16 },
    manualReportPath: "manually_coded_reports/report-data_development_refactoring_maintenance_updates.md",
    aiReportPath: "reports/report-development-refactoring_maintenance_updates.md"
  },
  {
    task: "Perf. Optimization",
    fullName: "Performance Optimization",
    category: "Development",
    z_support: 0.23701298701298779,
    z_usage: -0.3888888888888884,
    labelOffset: { dx: 0, dy: -16 },
    manualReportPath: "manually_coded_reports/report-data_development_performance_optimization.md",
    aiReportPath: "reports/report-development-performance_optimization.md"
  },
  {
    task: "AI Integration",
    fullName: "AI Development/Product Integration",
    category: "Development",
    z_support: -0.08603896103896069,
    z_usage: 0.23333333333333428,
    labelOffset: { dx: 0, dy: 16 },
    manualReportPath: "manually_coded_reports/report-data_development_ai_development_integration_into_products.md",
    aiReportPath: "reports/report-development-ai_development_integration_into_products.md"
  },
  {
    task: "Testing & QA",
    fullName: "Testing & Quality Assurance",
    category: "Quality & Risk Management",
    z_support: 1.6071428571428563,
    z_usage: 0.6285714285714292,
    labelOffset: { dx: 0, dy: 16 },
    manualReportPath: "manually_coded_reports/report-data_quality_risk_testing_quality_assurance.md",
    aiReportPath: "reports/report-quality_risk-testing_quality_assurance.md"
  },
  {
    task: "Code Review",
    fullName: "Code Review/Pull Requests",
    category: "Quality & Risk Management",
    z_support: 0.21428571428571486,
    z_usage: 0.49841269841269864,
    labelOffset: { dx: 0, dy: -16 },
    manualReportPath: "manually_coded_reports/report-data_quality_risk_code_review_pull_requests.md",
    aiReportPath: "reports/report-quality_risk-code_review_pull_requests.md"
  },
  {
    task: "Security",
    fullName: "Security & Compliance",
    category: "Quality & Risk Management",
    z_support: 0.7548701298701301,
    z_usage: -0.9142857142857146,
    labelOffset: { dx: 0, dy: 16 },
    manualReportPath: "manually_coded_reports/report-data_quality_risk_security_compliance.md",
    aiReportPath: "reports/report-quality_risk-security_compliance.md"
  },
  {
    task: "Requirements",
    fullName: "Requirements Engineering",
    category: "Design & Planning",
    z_support: -0.7597402597402598,
    z_usage: -0.5333333333333319,
    labelOffset: { dx: 0, dy: -16 },
    manualReportPath: "manually_coded_reports/report-data_design_planning_requirements_gathering_analysis.md",
    aiReportPath: "reports/report-design_planning-requirements_gathering_analysis.md"
  },
  {
    task: "System Design",
    fullName: "System Design",
    category: "Design & Planning",
    z_support: -1.150974025974026,
    z_usage: -0.06349206349206238,
    labelOffset: { dx: 0, dy: 16 },
    manualReportPath: "manually_coded_reports/report-data_design_planning_system_architecture_design.md",
    aiReportPath: "reports/report-design_planning-system_architecture_design.md"
  },
  {
    task: "Project Planning",
    fullName: "Project Planning & Management",
    category: "Design & Planning",
    z_support: -0.4707792207792201,
    z_usage: -0.5587301587301576,
    labelOffset: { dx: 0, dy: 16 },
    manualReportPath: "manually_coded_reports/report-data_design_planning_task_project_planning_management.md",
    aiReportPath: "reports/report-design_planning-task_project_planning_management.md"
  },
  {
    task: "DevOps",
    fullName: "DevOps(CI/CD)",
    category: "Infrastructure & Operations",
    z_support: 0.3555194805194821,
    z_usage: -0.6126984126984127,
    labelOffset: { dx: 0, dy: 16 },
    manualReportPath: "manually_coded_reports/report-data_infrastructure_operations_devops_ci_cd_deployment.md",
    aiReportPath: "reports/report-infrastructure_operations-devops_ci_cd_deployment.md"
  },
  {
    task: "Infra. Monitoring",
    fullName: "Infrastructure Monitoring",
    category: "Infrastructure & Operations",
    z_support: 0.9058441558441563,
    z_usage: -0.5301587301587296,
    labelOffset: { dx: 0, dy: 16 },
    manualReportPath: "manually_coded_reports/report-data_infrastructure_operations_infrastructure_monitoring_alerts.md",
    aiReportPath: "reports/report-infrastructure_operations-infrastructure_monitoring_alerts.md"
  },
  {
    task: "Env. Setup",
    fullName: "Environment Setup & Maintenance",
    category: "Infrastructure & Operations",
    z_support: 0.030844155844155452,
    z_usage: -0.6269841269841265,
    labelOffset: { dx: 0, dy: -16 },
    manualReportPath: "manually_coded_reports/report-data_infrastructure_operations_environment_setup_maintenance.md",
    aiReportPath: "reports/report-infrastructure_operations-environment_setup_maintenance.md"
  },
  {
    task: "Customer Support",
    fullName: "Customer Support",
    category: "Infrastructure & Operations",
    z_support: -0.45941558441558494,
    z_usage: -1.0746031746031734,
    labelOffset: { dx: 0, dy: 16 },
    manualReportPath: "manually_coded_reports/report-data_infrastructure_operations_customer_support.md",
    aiReportPath: "reports/report-infrastructure_operations-customer_support.md"
  },
  {
    task: "Documentation",
    fullName: "Documentation",
    category: "Meta-Work",
    z_support: 1.905844155844155,
    z_usage: -0.47936507936507944,
    labelOffset: { dx: -20, dy: 16 },
    manualReportPath: "manually_coded_reports/report-data_meta_work_documentation.md",
    aiReportPath: "reports/report-meta_work-documentation.md"
  },
  {
    task: "Learning",
    fullName: "Learning",
    category: "Meta-Work",
    z_support: 0.6347402597402603,
    z_usage: 0.7206349206349212,
    labelOffset: { dx: 0, dy: -16 },
    manualReportPath: "manually_coded_reports/report-data_meta_work_learning_new_technologies.md",
    aiReportPath: "reports/report-meta_work-learning_new_technologies.md"
  },
  {
    task: "Research",
    fullName: "Research & Brainstorming",
    category: "Meta-Work",
    z_support: 0.06655844155844193,
    z_usage: 0.45238095238095277,
    labelOffset: { dx: 0, dy: 16 },
    manualReportPath: "manually_coded_reports/report-data_meta_work_research_brainstorming.md",
    aiReportPath: "reports/report-meta_work-research_brainstorming.md"
  },
  {
    task: "Stakeholder Comm.",
    fullName: "Client/Stakeholder Communication",
    category: "Meta-Work",
    z_support: -1.4594155844155845,
    z_usage: -0.6158730158730155,
    labelOffset: { dx: 0, dy: 16 },
    manualReportPath: "manually_coded_reports/report-data_meta_work_client_stakeholder_communication_e_g_email_meetings.md",
    aiReportPath: "reports/report-meta_work-client_stakeholder_communication_e_g_email_meetings.md"
  },
  {
    task: "Mentoring",
    fullName: "Mentoring & Onboarding",
    category: "Meta-Work",
    z_support: -1.8814935064935066,
    z_usage: -1.439682539682539,
    labelOffset: { dx: 20, dy: 16 },
    manualReportPath: "manually_coded_reports/report-data_meta_work_mentoring_onboarding.md",
    aiReportPath: "reports/report-meta_work-mentoring_onboarding.md"
  }
];
