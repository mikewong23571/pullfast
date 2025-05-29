import {useState} from "react"
import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {Copy, CheckCircle} from "lucide-react"

export function QuickGuideSection() {
  const [copied, setCopied] = useState(false)

  const daemonConfig = `{
  "registry-mirrors": [
    "https://mirror.pullfast.io"
  ]
}`

  const copyConfig = () => {
    navigator.clipboard.writeText(daemonConfig)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const codeBlockClass = "font-mono text-sm bg-slate-100 dark:bg-slate-900 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap break-words";


  return (
    <section className="py-16 md:py-24 bg-slate-100 dark:bg-slate-900/60 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white">快速使用指南</h2>
          <p className="text-slate-600 dark:text-slate-400">只需简单配置，即可享受 PullFast 带来的极速体验</p>
        </div>

        <div className="space-y-8">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">1. 配置 Docker 镜像加速</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              编辑 Docker 的 daemon.json 配置文件，添加 PullFast 镜像源：
            </p>

            <div className="mb-4 text-sm">
              <div className="font-semibold mb-2 text-slate-700 dark:text-slate-300">Linux / macOS 路径：</div>
              <code
                className="font-mono text-sm bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded break-words max-w-full inline-block">
                /etc/docker/daemon.json
              </code>
            </div>

            <div className="mb-4 text-sm">
              <div className="font-semibold mb-2 text-slate-700 dark:text-slate-300">Windows 路径：</div>
              <code
                className="font-mono text-sm bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded break-words max-w-full inline-block">
                C:\ProgramData\docker\config\daemon.json
              </code>
            </div>

            <Card className="mb-4 border-slate-200 dark:border-slate-700">
              <CardContent className="p-0">
                <div className="relative">
              <pre
                className="font-mono text-sm bg-slate-100 dark:bg-slate-900 p-4 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap break-words">
                <code className="block">{daemonConfig}</code>
              </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 h-8 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
                    onClick={copyConfig}
                  >
                    {copied ? (
                      <>
                        <CheckCircle className="h-4 w-4 mr-1"/>
                        已复制
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 mr-1"/>
                        复制
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">2. 重启 Docker 服务</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">配置完成后，需要重启 Docker 服务使配置生效：</p>

            <div className="space-y-3">
              <div className="font-semibold text-slate-700 dark:text-slate-300">Linux：</div>
              <div
                className="font-mono text-sm bg-slate-100 dark:bg-slate-900 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap break-words">
                <code>sudo systemctl restart docker</code>
              </div>

              <div className="font-semibold text-slate-700 dark:text-slate-300">macOS：</div>
              <div
                className="font-mono text-sm bg-slate-100 dark:bg-slate-900 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap break-words">
                <code>osascript -e 'quit app "Docker"' && open -a Docker</code>
              </div>

              <div className="font-semibold text-slate-700 dark:text-slate-300">Windows：</div>
              <div
                className="font-mono text-sm bg-slate-100 dark:bg-slate-900 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap break-words">
                <code>重启 Docker Desktop 应用</code>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">3. 验证配置</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">执行以下命令，体验加速效果：</p>

            <div
              className="font-mono text-sm bg-slate-100 dark:bg-slate-900 p-3 rounded-md overflow-x-auto max-w-full whitespace-pre-wrap break-words">
              <code>docker pull pullfast.io/library/ubuntu:latest</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
