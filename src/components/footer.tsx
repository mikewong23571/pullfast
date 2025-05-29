import { Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">PullFast</h3>
            <p className="mb-4">国内领先的 Docker 镜像加速服务，让您的容器部署更快、更稳定。</p>
            <div className="flex items-center">
              <a
                href="https://github.com/pullfast"
                className="flex items-center text-slate-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  首页
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  文档
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  状态监控
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">法律信息</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  服务条款
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  隐私政策
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  免责声明
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} PullFast. 保留所有权利。</p>
          <p className="mt-2 md:mt-0">ICP备案号：京ICP备XXXXXXXX号-X</p>
        </div>
      </div>
    </footer>
  )
}
