import CONFIG from '../config'
import { siteConfig } from '@/lib/config'

/**
 * 博客统计卡牌
 * @param {*} props
 * @returns
 */
export function AnalyticsCard(props) {
  const targetDate = new Date(siteConfig('HEO_SITE_CREATE_TIME', null, CONFIG))
  const today = new Date()
  const diffTime = today.getTime() - targetDate.getTime() // 获取两个日期之间的毫秒数差值
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) // 将毫秒数差值转换为天数差值
  const startDate = new Date('2024-07-01')
  const endDate = new Date() // 获取当前日期
  const timeDiff = endDate.getTime() - startDate.getTime() // 获取两个日期之间的毫秒数差值
  const lovedays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) // 将毫秒数差值转换为天数差值


  const { postCount } = props
  return <>
      <div className='text-md flex flex-col space-y-4 justify-center px-5 py-4 bg-white rounded-lg shadow-lg'>
    <div className='inline'>
        <div className='flex justify-between items-center text-gray-700'>
            <div className='font-medium'>文章数:</div>
            <div className='font-semibold text-lg'>{postCount}</div>
        </div>
    </div>
    <div className='inline'>
        <div className='flex justify-between items-center text-gray-700'>
            <div className='font-medium'>建站天数:</div>
            <div className='font-semibold text-lg'>{diffDays} 天</div>
        </div>
    </div>
    <div className='hidden busuanzi_container_site_uv'>
        <div className='flex justify-between items-center text-gray-700'>
            <div className='font-medium'>访客数:</div>
            <div className='busuanzi_value_site_uv font-semibold text-lg' />
        </div>
    </div>
    <div className='inline'>
        <div className='flex justify-between items-center text-pink-600 font-bold text-xl'>
            <div className='flex items-center'>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    strokeWidth={0} 
                    className="w-8 h-8 mr-2 text-red-500 animate-pulse"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M3.172 5.172a4 4 0 015.656 0L12 8.343l3.172-3.171a4 4 0 115.656 5.656l-8.486 8.486a.5.5 0 01-.707 0l-8.486-8.486a4 4 0 010-5.656z" 
                    />
                </svg>
                <span className='text-pink-700'>和LZX相恋已经:</span>
            </div>
            <div className='text-pink-700 text-2xl'>{lovedays} 天</div>
        </div>
    </div>
</div>

        </>
}
