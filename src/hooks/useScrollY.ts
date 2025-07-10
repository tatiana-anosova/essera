import { useSyncExternalStore } from 'react'

export function useScrollY() {
	return useSyncExternalStore(
		(callback) => {
			window.addEventListener('scroll', callback)
			return () => window.removeEventListener('scroll', callback)
		},
		() => window.scrollY,
		() => 0 // для SSR
	)
}
