<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vitepress'

type Role = 'operator' | 'provider' | 'enduser'
type Subsystem = 'platform' | 'settings' | 'model-services' | 'billing' | 'on-prem' | 'on-cloud'
type Locale = 'zh' | 'en'

interface Scenario {
  id: number
  guideSlug: string
  title: Record<Locale, string>
  description: Record<Locale, string>
  roles: Role[]
  subsystems: Subsystem[]
  tasks: string[]
}

const route = useRoute()

const locale = computed<Locale>(() => (route.path.startsWith('/zh-CN/') ? 'zh' : 'en'))

const uiText: Record<Locale, Record<string, string>> = {
  zh: {
    taskCloud: '常见任务',
    scenarios: '使用场景',
    summaryPrefix: '当前显示',
    summarySuffix: '个闭环场景。可按用户角色和子系统筛选。',
    filters: '场景筛选',
    role: '用户角色',
    subsystem: '子系统',
    all: '全部',
    cta: '进入指南',
    empty: '当前筛选条件下没有匹配的闭环场景。',
    clear: '清除筛选',
  },
  en: {
    taskCloud: 'Common Tasks',
    scenarios: 'Use Scenarios',
    summaryPrefix: 'Showing',
    summarySuffix: 'closed-loop scenarios. Filter by user role and subsystem.',
    filters: 'Scenario Filters',
    role: 'User Role',
    subsystem: 'Subsystem',
    all: 'All',
    cta: 'Open Guide',
    empty: 'No matching scenarios under the current filters.',
    clear: 'Clear Filters',
  },
}

const roleOptions = computed(() => [
  { value: 'all', label: uiText[locale.value].all },
  { value: 'operator', label: 'Operator' },
  { value: 'provider', label: 'Provider' },
  { value: 'enduser', label: 'End User' },
])

const subsystemOptions = computed(() => [
  { value: 'all', label: uiText[locale.value].all },
  { value: 'on-prem', label: 'AI Infra-On Prem' },
  { value: 'on-cloud', label: 'AI Infra-On Cloud' },
  { value: 'model-services', label: 'Model Services' },
  { value: 'billing', label: 'Billing' },
  { value: 'platform', label: 'Platform' },
  { value: 'settings', label: 'Settings' },
])

const taskOptions = computed(() => [
  { value: 'gpu', label: locale.value === 'zh' ? '我要纳管算力' : 'Manage Compute' },
  { value: 'publish', label: locale.value === 'zh' ? '我要发布模型' : 'Publish Models' },
  { value: 'call', label: locale.value === 'zh' ? '我要调用模型' : 'Call Models' },
  { value: 'bill', label: locale.value === 'zh' ? '我要看账单' : 'View Bills' },
  { value: 'account', label: locale.value === 'zh' ? '我要做治理' : 'Govern Access' },
])

const roleLabels: Record<Role, string> = {
  operator: 'Operator',
  provider: 'Provider',
  enduser: 'End User',
}

const subsystemLabels: Record<Subsystem, string> = {
  platform: 'Platform',
  settings: 'Settings',
  'model-services': 'Model Services',
  billing: 'Billing',
  'on-prem': 'On-Prem',
  'on-cloud': 'On Cloud',
}

const scenarios: Scenario[] = [
  {
    id: 1,
    guideSlug: 'register-login',
    title: { zh: '注册 & 登录', en: 'Register & Login' },
    description: {
      zh: 'Enduser 完成邮箱注册；Operator/Enduser/Provider 登录平台并进入对应工作台。',
      en: 'End users complete email registration; Operator, End User, and Provider log in and enter their workspaces.',
    },
    roles: ['enduser', 'operator', 'provider'],
    subsystems: ['platform'],
    tasks: ['account'],
  },
  {
    id: 2,
    guideSlug: 'identity-authorization',
    title: { zh: '身份授权', en: 'Identity Authorization' },
    description: {
      zh: 'Operator 通过角色、菜单与按钮权限控制谁能看见、能操作什么。',
      en: 'Operators control who can see and operate features through roles, menus, and button permissions.',
    },
    roles: ['operator'],
    subsystems: ['settings'],
    tasks: ['account'],
  },
  {
    id: 3,
    guideSlug: 'publish-model',
    title: { zh: '发布模型', en: 'Publish Models' },
    description: {
      zh: 'Provider 把外部 Endpoint、自有或平台托管模型发布为公有/私有服务，配置计费与限流。',
      en: 'Providers publish external endpoints, self-owned models, or platform-hosted models as public or private services with billing and throttling.',
    },
    roles: ['provider'],
    subsystems: ['model-services'],
    tasks: ['publish'],
  },
  {
    id: 4,
    guideSlug: 'publish-model-preconfiguration',
    title: { zh: '发布模型（预设置）', en: 'Publish Models Preconfiguration' },
    description: {
      zh: '为发布准备标准化的元模型、模型来源、模板和标签，降低 Provider 的重复配置。',
      en: 'Prepare standardized meta-models, model sources, templates, and tags to reduce repeated provider configuration.',
    },
    roles: ['operator'],
    subsystems: ['model-services'],
    tasks: ['publish'],
  },
  {
    id: 5,
    guideSlug: 'publish-aggregation-model',
    title: { zh: '发布聚合模型', en: 'Publish Aggregation Models' },
    description: {
      zh: '把多个已发布模型包装成统一入口，按策略（成功率/成本/均衡/随机/轮询）路由。',
      en: 'Wrap multiple published models behind one entry point and route requests by success rate, cost, balance, random, or round-robin policies.',
    },
    roles: ['provider'],
    subsystems: ['model-services'],
    tasks: ['publish'],
  },
  {
    id: 6,
    guideSlug: 'model-experience-api-calling',
    title: { zh: '模型的体验与调用', en: 'Model Experience & API Calling' },
    description: {
      zh: 'Enduser 发现、体验、API 接入并回看调用；Provider 观察客户维度的调用情况。',
      en: 'End users discover, try, integrate, and review calls; providers monitor customer-level calling activity.',
    },
    roles: ['enduser', 'provider'],
    subsystems: ['model-services'],
    tasks: ['call'],
  },
  {
    id: 7,
    guideSlug: 'model-usage-revenue',
    title: { zh: '模型的消费与收益', en: 'Model Usage & Revenue' },
    description: {
      zh: '将调用产生的 Token/时长/次数转成 Enduser 消耗与 Provider 收益，并跟踪账期。',
      en: 'Convert tokens, duration, and request counts into end-user usage and provider revenue across billing periods.',
    },
    roles: ['enduser', 'provider'],
    subsystems: ['model-services'],
    tasks: ['bill', 'call'],
  },
  {
    id: 8,
    guideSlug: 'recharge-billing',
    title: { zh: '充值 & 计费', en: 'Recharge & Billing' },
    description: {
      zh: '获得可消费额度，记录模型与卡时消耗，生成消费、收益和账期数据。',
      en: 'Obtain spendable balance, record model and card-hour usage, and generate usage, revenue, and billing-period data.',
    },
    roles: ['enduser', 'provider'],
    subsystems: ['billing'],
    tasks: ['bill'],
  },
  {
    id: 9,
    guideSlug: 'on-prem-compute-onboarding',
    title: { zh: 'On-Prem 算力纳管', en: 'On-Prem Compute Onboarding' },
    description: {
      zh: '把私有 IDC / 本地 GPU / NPU / XPU 接入 AGIOne，成为可调度、可计量、可监控的资源池。',
      en: 'Connect private IDC, local GPU, NPU, or XPU resources to AGIOne as schedulable, metered, and observable resource pools.',
    },
    roles: ['operator'],
    subsystems: ['on-prem'],
    tasks: ['gpu'],
  },
  {
    id: 10,
    guideSlug: 'on-prem-inference-template',
    title: { zh: 'On-Prem 推理模板构建', en: 'On-Prem Inference Template Building' },
    description: {
      zh: '把推理参数沉淀为模板，让用户基于模板快速完成在线推理部署。',
      en: 'Turn inference parameters into templates so users can quickly deploy online inference services.',
    },
    roles: ['operator'],
    subsystems: ['on-prem'],
    tasks: ['gpu'],
  },
  {
    id: 11,
    guideSlug: 'on-prem-model-deployment-status',
    title: { zh: 'On-Prem 模型部署与状态检查', en: 'On-Prem Model Deployment & Status Check' },
    description: {
      zh: '在本地资源池上部署在线推理服务，确认可运行、可访问、可排障。',
      en: 'Deploy online inference services on local resource pools and confirm they are runnable, accessible, and diagnosable.',
    },
    roles: ['provider', 'enduser'],
    subsystems: ['on-prem'],
    tasks: ['gpu', 'call'],
  },
  {
    id: 12,
    guideSlug: 'on-prem-dev-training-assets',
    title: { zh: 'On-Prem 开发训练与资产沉淀', en: 'On-Prem Development, Training & Assets' },
    description: {
      zh: '支持开发、训练与数据管理，沉淀模型、镜像、数据集等资产。',
      en: 'Support development, training, and data management while accumulating models, images, datasets, and other assets.',
    },
    roles: ['enduser', 'operator'],
    subsystems: ['on-prem'],
    tasks: ['gpu'],
  },
  {
    id: 13,
    guideSlug: 'on-prem-resource-metering-monitoring',
    title: { zh: 'On-Prem 资源计量与监控', en: 'On-Prem Resource Metering & Monitoring' },
    description: {
      zh: '控制额度，对资源池运行、水位、用量、账期计量做运营监控。',
      en: 'Control quotas and monitor resource pool runtime status, capacity, usage, and billing-period metering.',
    },
    roles: ['operator', 'provider', 'enduser'],
    subsystems: ['on-prem'],
    tasks: ['gpu', 'bill'],
  },
  {
    id: 14,
    guideSlug: 'on-cloud-resource-access',
    title: { zh: 'On Cloud 云资源接入', en: 'On Cloud Resource Access' },
    description: {
      zh: '把云厂商、云账号、地域、资源池接入平台，并授权给租户或业务类型使用。',
      en: 'Connect cloud providers, cloud accounts, regions, and resource pools, then authorize tenants or business types to use them.',
    },
    roles: ['operator'],
    subsystems: ['on-cloud'],
    tasks: ['gpu'],
  },
  {
    id: 15,
    guideSlug: 'on-cloud-model-asset-publishing',
    title: { zh: 'On Cloud 模型资产上架', en: 'On Cloud Model Asset Publishing' },
    description: {
      zh: '把云上模型需要的运行环境、框架、分类、模型信息与输出 API 配成可部署资产。',
      en: 'Configure runtime environments, frameworks, categories, model information, and output APIs as deployable cloud model assets.',
    },
    roles: ['operator'],
    subsystems: ['on-cloud'],
    tasks: ['publish'],
  },
  {
    id: 16,
    guideSlug: 'on-cloud-model-deployment-calling',
    title: { zh: 'On Cloud 模型部署与调用', en: 'On Cloud Model Deployment & Calling' },
    description: {
      zh: '从云上模型广场选模型，完成部署并获得 API 调用能力。',
      en: 'Select models from the cloud model marketplace, deploy them, and obtain API calling capability.',
    },
    roles: ['provider', 'enduser'],
    subsystems: ['on-cloud'],
    tasks: ['gpu', 'call'],
  },
  {
    id: 17,
    guideSlug: 'model-publishing-approval',
    title: { zh: '模型发布审批', en: 'Model Publishing Approval' },
    description: {
      zh: '对 Provider 的发布申请做模型信息、协议、计费、限流的治理审批。',
      en: 'Review provider publishing requests for model information, agreements, billing, and throttling governance.',
    },
    roles: ['operator'],
    subsystems: ['model-services'],
    tasks: ['publish', 'account'],
  },
  {
    id: 18,
    guideSlug: 'observability-troubleshooting',
    title: { zh: '可观测与问题排查', en: 'Observability & Troubleshooting' },
    description: {
      zh: '从模型、Org、资源三个视角定位吞吐、时延、状态、失败和资源问题。',
      en: 'Locate throughput, latency, status, failure, and resource issues from model, organization, and resource perspectives.',
    },
    roles: ['operator', 'provider', 'enduser'],
    subsystems: ['model-services', 'on-prem', 'on-cloud'],
    tasks: ['call', 'gpu'],
  },
  {
    id: 19,
    guideSlug: 'platform-governance-access-control',
    title: { zh: '平台治理与访问控制', en: 'Platform Governance & Access Control' },
    description: {
      zh: '控制谁能访问什么、能调用多少、能使用哪些 Key / Project / 模型 / 额度。',
      en: 'Control who can access what, how much they can call, and which keys, projects, models, and quotas they can use.',
    },
    roles: ['operator', 'provider', 'enduser'],
    subsystems: ['platform', 'settings', 'model-services'],
    tasks: ['account'],
  },
]

const currentRole = ref('all')
const currentSubsystem = ref('all')
const currentTask = ref('all')

const filteredScenarios = computed(() => {
  return scenarios.filter((scenario) => {
    const roleMatched = currentRole.value === 'all' || scenario.roles.includes(currentRole.value as Role)
    const subsystemMatched =
      currentSubsystem.value === 'all' || scenario.subsystems.includes(currentSubsystem.value as Subsystem)
    const taskMatched = currentTask.value === 'all' || scenario.tasks.includes(currentTask.value)

    return roleMatched && subsystemMatched && taskMatched
  })
})

const localizedScenarios = computed(() =>
  filteredScenarios.value.map((scenario) => ({
    ...scenario,
    guideLink: guidePath(scenario.guideSlug),
    titleText: scenario.title[locale.value],
    descriptionText: scenario.description[locale.value],
  }))
)

function selectRole(role: string) {
  currentRole.value = role
}

function selectSubsystem(subsystem: string) {
  currentSubsystem.value = subsystem
}

function selectTask(task: string) {
  currentTask.value = currentTask.value === task ? 'all' : task
  currentRole.value = 'all'
  currentSubsystem.value = 'all'
}

function clearFilters() {
  currentRole.value = 'all'
  currentSubsystem.value = 'all'
  currentTask.value = 'all'
}

function scenarioNumber(id: number) {
  return String(id).padStart(2, '0')
}

function guidePath(slug: string) {
  const prefix = locale.value === 'zh' ? '/zh-CN/userguide/scenarios' : '/userguide/scenarios'
  return `${prefix}/${slug}/`
}
</script>

<template>
  <section class="agp-scenario-guide">
    <div class="agp-task-cloud" :aria-label="uiText[locale].taskCloud">
      <p class="agp-task-cloud-title">{{ uiText[locale].taskCloud }}</p>
      <div class="agp-task-bubbles">
        <button
          v-for="task in taskOptions"
          :key="task.value"
          type="button"
          :class="{ 'is-active': currentTask === task.value }"
          @click="selectTask(task.value)"
        >
          {{ task.label }}
        </button>
      </div>
    </div>

    <div class="agp-section-head">
      <h2>{{ uiText[locale].scenarios }}</h2>
      <p>
        {{ uiText[locale].summaryPrefix }} {{ localizedScenarios.length }} {{ uiText[locale].summarySuffix }}
      </p>
    </div>

    <div class="agp-filter-bar" :aria-label="uiText[locale].filters">
      <div class="agp-filter-row">
        <span class="agp-filter-label">{{ uiText[locale].role }}</span>
        <div class="agp-chip-group">
          <button
            v-for="role in roleOptions"
            :key="role.value"
            type="button"
            :class="{ 'is-active': currentRole === role.value }"
            @click="selectRole(role.value)"
          >
            {{ role.label }}
          </button>
        </div>
      </div>

      <div class="agp-filter-row">
        <span class="agp-filter-label">{{ uiText[locale].subsystem }}</span>
        <div class="agp-chip-group">
          <button
            v-for="subsystem in subsystemOptions"
            :key="subsystem.value"
            type="button"
            :class="{ 'is-active': currentSubsystem === subsystem.value }"
            @click="selectSubsystem(subsystem.value)"
          >
            {{ subsystem.label }}
          </button>
        </div>
      </div>
    </div>

    <div v-if="localizedScenarios.length" class="agp-card-grid">
      <article
        v-for="scenario in localizedScenarios"
        :id="`sc-${scenario.id}`"
        :key="scenario.id"
        class="agp-card"
      >
        <div class="agp-card-head">
          <div>
            <h3>{{ scenario.titleText }}</h3>
            <p>{{ scenario.descriptionText }}</p>
          </div>
          <span class="agp-card-index">{{ scenarioNumber(scenario.id) }}</span>
        </div>

        <div class="agp-card-tags">
          <div class="agp-pill-row">
            <span
              v-for="subsystem in scenario.subsystems"
              :key="subsystem"
              class="agp-pill"
              :class="`agp-pill-${subsystem}`"
            >
              {{ subsystemLabels[subsystem] }}
            </span>
          </div>
          <div class="agp-pill-row">
            <span
              v-for="role in scenario.roles"
              :key="role"
              class="agp-pill"
              :class="`agp-pill-${role === 'enduser' ? 'eu' : role}`"
            >
              {{ roleLabels[role] }}
            </span>
          </div>
        </div>

        <a class="agp-card-cta" :href="scenario.guideLink">{{ uiText[locale].cta }}</a>
      </article>
    </div>

    <div v-else class="agp-empty">
      <p>{{ uiText[locale].empty }}</p>
      <button type="button" @click="clearFilters">{{ uiText[locale].clear }}</button>
    </div>
  </section>
</template>

<style scoped>
.agp-scenario-guide {
  --agp-card-bg: var(--vp-c-bg-soft);
  --agp-card-elevated: var(--vp-c-bg);
  --agp-border: var(--vp-c-divider);
  --agp-muted: var(--vp-c-text-2);
  --agp-text: var(--vp-c-text-1);
  --agp-primary: var(--vp-c-brand-1);
  --agp-primary-strong: #2748a8;
  --agp-primary-soft: var(--vp-c-brand-soft);
  margin-top: 24px;
}

.agp-task-cloud,
.agp-filter-bar,
.agp-empty {
  border: 1px solid var(--agp-border);
  border-radius: 14px;
  background: var(--agp-card-bg);
}

.agp-task-cloud {
  padding: 16px 18px 18px;
  margin-bottom: 28px;
}

.agp-task-cloud-title {
  margin: 0 0 12px;
  color: var(--agp-text);
  font-size: 20px;
  line-height: 28px;
  font-weight: 700;
}

.agp-task-bubbles,
.agp-chip-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.agp-task-bubbles button,
.agp-chip-group button,
.agp-empty button {
  appearance: none;
  border: 1px solid var(--agp-border);
  border-radius: 999px;
  background: var(--agp-card-elevated);
  color: var(--agp-muted);
  cursor: pointer;
  font: inherit;
  transition: background 0.16s ease, border-color 0.16s ease, color 0.16s ease;
}

.agp-task-bubbles button {
  min-width: 148px;
  padding: 9px 16px;
}

.agp-chip-group button {
  min-height: 32px;
  padding: 6px 12px;
}

.agp-task-bubbles button:hover,
.agp-task-bubbles button.is-active,
.agp-chip-group button:hover,
.agp-chip-group button.is-active {
  border-color: var(--agp-primary);
  background: var(--agp-primary-soft);
  color: var(--agp-primary);
}

.agp-section-head {
  margin: 0 0 14px;
}

.agp-section-head h2 {
  margin: 0 0 8px;
}

.agp-section-head p {
  margin: 0;
  color: var(--agp-muted);
}

.agp-filter-bar {
  display: grid;
  gap: 14px;
  padding: 16px;
  margin-bottom: 18px;
}

.agp-filter-row {
  display: grid;
  grid-template-columns: 92px minmax(0, 1fr);
  gap: 12px;
  align-items: start;
}

.agp-filter-label {
  padding-top: 7px;
  color: var(--agp-muted);
  font-size: 13px;
  line-height: 20px;
  font-weight: 700;
}

.agp-card-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.agp-card {
  display: flex;
  flex-direction: column;
  min-height: 360px;
  padding: 24px;
  border: 1px solid var(--agp-border);
  border-radius: 14px;
  background: var(--agp-card-bg);
}

.agp-card-head {
  display: flex;
  justify-content: space-between;
  gap: 16px;
}

.agp-card h3 {
  margin: 0;
  color: var(--agp-text);
  font-size: 22px;
  line-height: 30px;
  font-weight: 760;
}

.agp-card p {
  margin: 18px 0 0;
  color: var(--agp-text);
  line-height: 1.85;
}

.agp-card-index {
  flex: 0 0 auto;
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border-radius: 13px;
  background: rgba(46, 52, 100, 0.92);
  color: #dce4ff;
  font-size: 15px;
  line-height: 1;
  font-weight: 800;
}

.agp-card-tags {
  margin-top: auto;
  padding-top: 28px;
}

.agp-pill-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.agp-pill-row + .agp-pill-row {
  margin-top: 8px;
}

.agp-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 32px;
  gap: 6px;
  padding: 3px 10px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 4px;
  white-space: nowrap;
  font-size: 13px;
  line-height: 1;
  font-weight: 700;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.agp-pill-operator {
  color: #aeb8ff;
  background: rgba(46, 52, 100, 0.84);
  border-color: rgba(125, 139, 255, 0.48);
}

.agp-pill-provider {
  color: #64d994;
  background: rgba(25, 79, 55, 0.78);
  border-color: rgba(91, 198, 133, 0.44);
}

.agp-pill-eu {
  color: #c7a6ff;
  background: rgba(75, 42, 122, 0.78);
  border-color: rgba(169, 123, 255, 0.44);
}

.agp-pill-platform {
  color: #86b7ff;
  background: rgba(28, 53, 105, 0.82);
  border-color: rgba(86, 145, 255, 0.5);
}

.agp-pill-settings {
  color: #c89bff;
  background: rgba(70, 42, 109, 0.82);
  border-color: rgba(169, 99, 255, 0.48);
}

.agp-pill-model-services,
.agp-pill-on-prem {
  color: #ffb36a;
  background: rgba(75, 54, 44, 0.86);
  border-color: rgba(201, 126, 73, 0.44);
}

.agp-pill-billing {
  color: #ff8fb9;
  background: rgba(91, 35, 59, 0.8);
  border-color: rgba(225, 83, 137, 0.46);
}

.agp-pill-on-cloud {
  color: #65d6ee;
  background: rgba(27, 74, 86, 0.82);
  border-color: rgba(61, 184, 211, 0.46);
}

.agp-card-cta {
  display: block;
  margin-top: 22px;
  padding: 10px 12px;
  border-radius: 7px;
  background: var(--vp-c-brand-3);
  color: #ffffff;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  transition: background 0.15s ease;
}

.agp-card-cta:hover {
  background: var(--agp-primary-strong);
  color: #ffffff;
}

.agp-empty {
  padding: 24px;
  text-align: center;
  color: var(--agp-muted);
}

.agp-empty p {
  margin: 0 0 12px;
}

.agp-empty button {
  padding: 8px 14px;
}

:global(html:not(.dark) .agp-card) {
  background: #ffffff;
  border-color: #e5e7eb;
}

:global(html:not(.dark) .agp-card-index) {
  background: #eef2ff;
  color: #334155;
  border: 1px solid #c7d2fe;
}

:global(html:not(.dark) .agp-pill) {
  box-shadow: none;
}

:global(html:not(.dark) .agp-pill-platform) {
  color: #1d4ed8;
  background: #dbeafe;
  border-color: #93c5fd;
}

:global(html:not(.dark) .agp-pill-settings),
:global(html:not(.dark) .agp-pill-eu) {
  color: #6d28d9;
  background: #ede9fe;
  border-color: #c4b5fd;
}

:global(html:not(.dark) .agp-pill-operator) {
  color: #3730a3;
  background: #e0e7ff;
  border-color: #a5b4fc;
}

:global(html:not(.dark) .agp-pill-provider) {
  color: #047857;
  background: #d1fae5;
  border-color: #86efac;
}

:global(html:not(.dark) .agp-pill-model-services),
:global(html:not(.dark) .agp-pill-on-prem) {
  color: #b45309;
  background: #ffedd5;
  border-color: #fdba74;
}

:global(html:not(.dark) .agp-pill-billing) {
  color: #be185d;
  background: #fce7f3;
  border-color: #f9a8d4;
}

:global(html:not(.dark) .agp-pill-on-cloud) {
  color: #0e7490;
  background: #cffafe;
  border-color: #67e8f9;
}

@media (max-width: 960px) {
  .agp-card-grid {
    grid-template-columns: 1fr;
  }

  .agp-filter-row {
    grid-template-columns: 1fr;
  }

  .agp-filter-label {
    padding-top: 0;
  }
}

@media (max-width: 640px) {
  .agp-task-bubbles button {
    width: 100%;
  }
}
</style>
