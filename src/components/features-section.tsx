import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Shield, Globe, RefreshCw, Zap, Server } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <Rocket className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: "极速拉取",
      description: "国内专线加速，拉取速度提升 10 倍以上，大幅缩短部署时间",
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: "HTTPS 支持",
      description: "全链路 HTTPS 加密传输，确保镜像安全可靠，防止中间人攻击",
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: "全球覆盖",
      description: "多节点分布式缓存，覆盖全国各地区，智能选择最近节点",
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: "自动同步",
      description: "与官方源实时同步，确保镜像版本一致性，无缓存过期问题",
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: "免登录使用",
      description: "无需注册账号，无需身份验证，配置即用，简单便捷",
    },
    {
      icon: <Server className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: "Docker 兼容",
      description: "完全兼容 Docker、Podman 等容器运行时，无需额外配置",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-950 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white">为什么选择 PullFast？</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            PullFast 提供业内领先的 Docker 镜像加速服务，让您的开发和部署流程更加顺畅
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border border-slate-200 dark:border-slate-800 dark:bg-slate-900 hover:shadow-md transition-shadow duration-300"
            >
              <CardHeader className="pb-2">
                <div className="mb-2">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 dark:text-slate-400">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
