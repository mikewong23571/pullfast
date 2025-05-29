"use client"

import {useState} from "react"
import {Button} from "@/components/ui/button"
import {Loader2, ArrowRight} from "lucide-react"

export function CtaSection() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSpeedTest = () => {
    setIsLoading(true)

    // 滚动到测速结果区域
    document.getElementById("speed-results")?.scrollIntoView({behavior: "smooth"})

    // 模拟测速过程
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  const scrollToGuide = () => {
    document.querySelector("section:nth-of-type(4)")?.scrollIntoView({behavior: "smooth"})
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-800 to-slate-900 text-white px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">立即体验 Docker 镜像加速服务</h2>
        <p className="text-slate-300 mb-8 text-lg max-w-2xl mx-auto">
          告别漫长的等待，让您的开发和部署流程更加高效。 PullFast 让 Docker 镜像拉取速度提升 10 倍，无需注册，即刻使用。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={handleSpeedTest}
            disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                测速中...
              </>
            ) : (
              "再次测速对比"
            )}
          </Button>

          <Button
            size="lg"
            onClick={scrollToGuide}
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            查看配置指南
            <ArrowRight className="ml-2 h-4 w-4"/>
          </Button>
        </div>
      </div>
    </section>
  )
}
