import {useState} from "react"
import {Button} from "@/components/ui/button"
import {Loader2, Copy, CheckCircle} from "lucide-react"

export function HeroSection() {
  const [isTesting, setIsTesting] = useState(false)
  const [testComplete, setTestComplete] = useState(false)
  const [copied, setCopied] = useState(false)

  const dockerCommand = "docker pull pullfast.io/library/ubuntu:latest"

  const handleSpeedTest = async () => {
    setIsTesting(true)
    // 模拟测速过程
    await new Promise((resolve) => setTimeout(resolve, 2500))
    setIsTesting(false)
    setTestComplete(true)

    // 滚动到测速结果区域
    document.getElementById("speed-results")?.scrollIntoView({behavior: "smooth"})
  }

  const copyCommand = () => {
    navigator.clipboard.writeText(dockerCommand)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative bg-slate-900 text-white py-16 md:py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div
          className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.4),transparent_40%)]"></div>
        <div
          className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.4),transparent_40%)]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">


          <div className="text-center space-y-4 md:space-y-4 lg:space-y-6 lg:mb-6 md:mb-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-blue-300">
              Docker 镜像加速
            </h1>
            <div className="text-2xl font-medium">
              <span
                className="text-6xl font-extrabold align-baseline text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 animate-glow-yellow">快</span>
              <span className="text-blue-300 text-base align-baseline">，快得惊人</span>
              <span className="mx-2"></span>
              <span
                className="text-6xl font-extrabold align-baseline text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-green-500 to-emerald-700 animate-glow-green">稳</span>
              <span className="text-blue-300 text-base align-baseline">，稳得出奇</span>
            </div>
          </div>


          <p className="text-lg md:text-xl text-slate-300 mb-8">
            PullFast 是国内最快的免费 Docker 镜像加速服务，无需登录，即装即用让您的容器部署速度提升 10 倍
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              onClick={handleSpeedTest}
              disabled={isTesting}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
            >
              {isTesting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                  测速中...
                </>
              ) : (
                "一键测速对比"
              )}
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={copyCommand}
              className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              {copied ? (
                <>
                  <CheckCircle className="mr-2 h-4 w-4"/>
                  已复制
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-4 w-4"/>
                  复制 Docker 命令
                </>
              )}
            </Button>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700 font-mono text-sm overflow-x-auto">
            <code className="text-green-400">{dockerCommand}</code>
          </div>
        </div>
      </div>
    </section>
  )
}
