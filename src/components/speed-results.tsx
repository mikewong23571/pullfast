"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export function SpeedResults() {
  const [officialTime, setOfficialTime] = useState(0)
  const [acceleratedTime, setAcceleratedTime] = useState(0)
  const [speedRatio, setSpeedRatio] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // 模拟测速结果
  useEffect(() => {
    const animateResults = () => {
      setIsAnimating(true)

      // 模拟官方源拉取时间（较慢）
      const officialFinalTime = 78.5
      // 模拟加速源拉取时间（较快）
      const acceleratedFinalTime = 7.2
      // 计算提速比例
      const finalRatio = +(officialFinalTime / acceleratedFinalTime).toFixed(1)

      // 动画展示官方源时间
      let officialCurrent = 0
      const officialInterval = setInterval(() => {
        officialCurrent += 2
        setOfficialTime(Math.min(officialCurrent, officialFinalTime))
        if (officialCurrent >= officialFinalTime) {
          clearInterval(officialInterval)
        }
      }, 50)

      // 动画展示加速源时间
      let acceleratedCurrent = 0
      const acceleratedInterval = setInterval(() => {
        acceleratedCurrent += 0.2
        setAcceleratedTime(Math.min(acceleratedCurrent, acceleratedFinalTime))
        if (acceleratedCurrent >= acceleratedFinalTime) {
          clearInterval(acceleratedInterval)
        }
      }, 50)

      // 动画展示提速比例
      let ratioCurrent = 1
      const ratioInterval = setInterval(() => {
        ratioCurrent += 0.1
        setSpeedRatio(Math.min(ratioCurrent, finalRatio))
        if (ratioCurrent >= finalRatio) {
          clearInterval(ratioInterval)
          setIsAnimating(false)
        }
      }, 100)

      return () => {
        clearInterval(officialInterval)
        clearInterval(acceleratedInterval)
        clearInterval(ratioInterval)
      }
    }

    animateResults()
  }, [])

  return (
    <section id="speed-results" className="py-16 bg-slate-50 dark:bg-slate-900 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 dark:text-white">测速结果对比</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="dark:border-slate-700 dark:bg-slate-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center justify-between">
                官方源
                <Badge variant="outline" className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
                  慢
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2 text-slate-900 dark:text-slate-100">
                {officialTime.toFixed(1)} 秒
              </div>
              <Progress value={(officialTime / 100) * 100} className="h-2 bg-slate-200 dark:bg-slate-700">
                <div
                  className="h-full bg-red-500 rounded-full"
                  style={{ width: `${(officialTime / 100) * 100}%` }}
                ></div>
              </Progress>
            </CardContent>
          </Card>

          <Card className="dark:border-slate-700 dark:bg-slate-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center justify-between">
                PullFast 加速源
                <Badge
                  variant="outline"
                  className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                >
                  快
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2 text-slate-900 dark:text-slate-100">
                {acceleratedTime.toFixed(1)} 秒
              </div>
              <Progress value={(acceleratedTime / 10) * 100} className="h-2 bg-slate-200 dark:bg-slate-700">
                <div
                  className="h-full bg-green-500 rounded-full"
                  style={{ width: `${(acceleratedTime / 10) * 100}%` }}
                ></div>
              </Progress>
            </CardContent>
          </Card>

          <Card className="dark:border-slate-700 dark:bg-slate-800 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">提速倍数</CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col items-center justify-center">
              <div className="relative w-24 h-24 mb-2">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-blue-600 dark:text-blue-400 scale-[0.75]">
  {speedRatio.toFixed(1)}x
</span>

                </div>
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-slate-200 dark:text-slate-700"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeDasharray="283"
                    strokeDashoffset={283 - 283 * Math.min(speedRatio / 15, 1)}
                    className="text-blue-600 dark:text-blue-400"
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
              </div>
              <p className="text-sm text-center text-slate-600 dark:text-slate-400">
                比官方源快 {speedRatio.toFixed(1)} 倍
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
