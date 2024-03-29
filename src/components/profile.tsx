import getUser from '@/lib/auth'
import Image from 'next/image'

export default function Profile() {
  const { name, avatarUrl } = getUser()

  return (
    <div className="flex items-center justify-center gap-3">
      <Image
        src={`${avatarUrl}`}
        width={40}
        height={40}
        alt="avatar image"
        className="h-10 w-10 rounded-full"
      />
      <p className="max-w-[160px] text-sm leading-snug">
        {name}
        <a href="" className="block text-red-400 hover:text-red-300">
          Sair
        </a>
      </p>
    </div>
  )
}
