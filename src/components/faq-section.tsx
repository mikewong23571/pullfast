import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "PullFast 是否需要登录或注册？",
      answer:
        "不需要。PullFast 服务完全免登录，无需注册账号，只需配置 Docker 的镜像源地址即可立即使用，没有任何身份验证步骤。",
    },
    {
      question: "PullFast 如何与 Podman 配合使用？",
      answer:
        "Podman 用户可以在 /etc/containers/registries.conf 文件中添加 PullFast 镜像源。具体配置为在 [registries.mirror] 部分添加 'docker.io = [\"https://mirror.pullfast.io\"]'，配置后即可享受加速服务。",
    },
    {
      question: "PullFast 支持哪些镜像仓库？",
      answer:
        "PullFast 目前支持 Docker Hub、Quay.io、k8s.gcr.io、ghcr.io 等主流公共镜像仓库的加速。私有镜像仓库暂不支持加速服务。我们会持续扩展支持的镜像源范围。",
    },
    {
      question: "使用 PullFast 会影响镜像的安全性吗？",
      answer:
        "不会。PullFast 采用全链路 HTTPS 加密传输，并且对所有镜像进行数字签名验证，确保镜像内容与官方源完全一致，不会被篡改。我们还定期进行安全扫描，确保镜像无漏洞。",
    },
    {
      question: "PullFast 的使用是否有流量限制？",
      answer:
        "基础服务不设流量限制，适合个人开发者和小型团队使用。对于大规模企业用户，我们提供企业版服务，包含更高的并发支持、专属节点和技术支持，详情请联系我们的销售团队。",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-950 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white">常见问题</h2>
          <p className="text-slate-600 dark:text-slate-400">关于 PullFast 服务的常见问题解答</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-slate-200 dark:border-slate-800"
            >
              <AccordionTrigger className="text-left font-medium py-4 hover:text-blue-600 dark:hover:text-blue-400 dark:text-white">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 dark:text-slate-400 pb-4">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
