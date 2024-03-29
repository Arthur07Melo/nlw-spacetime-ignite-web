import { NextRequest, NextResponse } from 'next/server'
import { api } from '@/lib/api'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  const registerResponse = await api.post('/register', {
    code,
  })

  const { token } = registerResponse.data
  console.log(token)

  const redirectURL = new URL('/', request.url)

  const cookieExpiresInSeconds = 60 * 60 * 24 * 7

  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/; max-age=${cookieExpiresInSeconds}`,
    },
  })
}
