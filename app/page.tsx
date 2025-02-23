import { Button } from '@/components/ui/button';
import {
	Shuffle,
	Music2,
	ArrowRight,
	Clock,
	Star,
	Zap,
	Check,
	Timer,
} from 'lucide-react';
import type { Metadata } from 'next';
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
	title: 'Smart Playlist Shuffle - Advanced Spotify Playlist Randomization',
	description:
		'Transform your Spotify playlists with intelligent shuffling. Used by Lofi Girl and major labels. Features include automated scheduling, custom rules, and dynamic playlist management.',
	keywords:
		'spotify playlist, shuffle playlist, spotify randomizer, playlist manager, lofi girl playlist, automated playlist',
};

export default function Page() {
	return (
		<div className="min-h-screen bg-black text-white">
			{/* Hero Section */}
			<div className="relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-[#1E3264] via-black to-[#1DB954] opacity-90" />

				<div className="relative container mx-auto px-4  py-24 sm:py-32">
					<div className="flex flex-col items-center text-center space-y-8">
						<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl bg-gradient-to-r from-white via-white to-[#1DB954] bg-clip-text text-transparent pb-2">
							Level up your Spotify playlist game with AI-powered tools.
						</h1>

						<p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
							Create the perfect listening experience with random shuffle, smart
							rotation rules, automated updates, and dynamic playlist
							management. Start free and discover why top curators and labels
							trust us.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 lg:w-full w-48 justify-center">
							<Button
								size="lg"
								className="bg-[#1DB954] hover:bg-[#1DB954]/90 text-white font-semibold px-8 py-6 rounded-full text-lg"
							>
								Try For Free
								<ArrowRight className="ml-2 h-5 w-5" />
							</Button>
						</div>
					</div>

					{/* Trusted By Section */}
					<div className="mt-20 text-center">
						<p className="text-sm font-medium text-gray-400 mb-6">
							TRUSTED BY LEADING MUSIC CURATORS
						</p>
						<div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
							<div className="flex items-center space-x-2">
								<div className="w-8 h-8 rounded-full bg-[#1DB954]" />
								<span className="text-xl font-bold">Lofi Girl</span>
							</div>
							<div className="flex items-center space-x-2 opacity-75">
								<div className="w-8 h-8 rounded-full bg-[#1DB954]" />
								<span className="text-xl font-bold">Visionnaire Records</span>
							</div>
							<div className="flex items-center space-x-2 opacity-75">
								<div className="w-8 h-8 rounded-full bg-[#1DB954]" />
								<span className="text-xl font-bold">Effortless Audio</span>
							</div>
						</div>
					</div>

					{/* Benefits Grid */}
					<div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
						<div className="space-y-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm">
							<div className="w-12 h-12 rounded-full bg-[#1DB954]/10 flex items-center justify-center mx-auto">
								<Shuffle className="w-6 h-6 text-[#1DB954]" />
							</div>
							<h3 className="text-xl font-semibold">
								Keep Listeners Coming Back
							</h3>
							<p className="text-gray-400">
								Boost listener retention with a fresh playlist experience every
								day. Smart shuffling keeps your content exciting and
								unpredictable.
							</p>
						</div>

						<div className="space-y-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm">
							<div className="w-12 h-12 rounded-full bg-[#1DB954]/10 flex items-center justify-center mx-auto">
								<Timer className="w-6 h-6 text-[#1DB954]" />
							</div>
							<h3 className="text-xl font-semibold">Save Hours Every Week</h3>
							<p className="text-gray-400">
								Set up once, relax forever. Automated scheduling handles all
								your playlist updates, freeing up your time for what matters.
							</p>
						</div>

						<div className="space-y-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm">
							<div className="w-12 h-12 rounded-full bg-[#1DB954]/10 flex items-center justify-center mx-auto">
								<Star className="w-6 h-6 text-[#1DB954]" />
							</div>
							<h3 className="text-xl font-semibold">Boost Your Best Tracks</h3>
							<p className="text-gray-400">
								Strategically promote specific tracks while maintaining a
								natural feel. Perfect for featuring new releases or top
								performers.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Pricing Section */}
			<section className="py-24 container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
					Choose Your Perfect Plan
				</h2>
				<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					{/* Free Tier */}
					<div className="rounded-2xl bg-white/5 p-8 backdrop-blur-sm border border-white/10 flex flex-col">
						<div>
							<h3 className="text-xl font-semibold mb-4">Free</h3>
							<p className="text-2xl font-bold mb-6">
								$0
								<span className="text-sm font-normal text-gray-400">
									/forever
								</span>
							</p>
							<ul className="space-y-4 mb-8">
								<li className="flex items-center">
									<Check className="w-5 h-5 text-[#1DB954] mr-2" />
									<span>Unlimited manual shuffling</span>
								</li>
								<li className="flex items-center">
									<Check className="w-5 h-5 text-[#1DB954] mr-2" />
									<span>Unlimited playlists</span>
								</li>
								<li className="flex items-center">
									<Check className="w-5 h-5 text-[#1DB954] mr-2" />
									<span>Basic randomization algorithm</span>
								</li>
							</ul>
						</div>
						<div className="mt-auto">
							<Button className="w-full" variant="secondary">
								Start Free
							</Button>
						</div>
					</div>

					{/* Pro Tier */}
					<div className="rounded-2xl bg-[#1DB954] p-8 backdrop-blur-sm relative">
						<h3 className="text-xl font-semibold mb-4">Pro</h3>
						<p className="text-2xl font-bold mb-6">
							From $49
							<span className="text-sm font-normal text-gray-200">/month</span>
						</p>
						<ul className="space-y-4 mb-8">
							<li className="flex items-center">
								<Check className="w-5 h-5 text-white mr-2" />
								<span>Custom rules</span>
							</li>
							<li className="flex items-center">
								<Check className="w-5 h-5 text-white mr-2" />
								<span>Automated scheduling</span>
							</li>
							<li className="flex items-center">
								<Check className="w-5 h-5 text-white mr-2" />
								<span>Advanced rotation rules</span>
							</li>
							<li className="flex items-center">
								<Check className="w-5 h-5 text-white mr-2" />
								<span>Priority customer support</span>
							</li>
							<li className="flex items-center">
								<Check className="w-5 h-5 text-white mr-2" />
								<span>AI playlist suggestions</span>
							</li>
						</ul>
						<Button className="w-full bg-black hover:bg-black/90">
							Get Pro
						</Button>
					</div>
				</div>
			</section>

			{/* Advanced Features Section */}
			<section className="py-24 bg-gradient-to-b from-black to-[#1E3264]">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
						Advanced Features for Power Users
					</h2>
					<div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
						<div className="space-y-6">
							<div className="space-y-2">
								<h3 className="text-xl font-semibold flex items-center">
									<Clock className="w-6 h-6 text-[#1DB954] mr-2" />
									Time-Based Rotation
								</h3>
								<p className="text-gray-400">
									Set tracks to appear in your playlist for specific durations.
									Perfect for seasonal content or promotional tracks.
								</p>
							</div>
							<div className="space-y-2">
								<h3 className="text-xl font-semibold flex items-center">
									<Zap className="w-6 h-6 text-[#1DB954] mr-2" />
									Smart Promotion Rules
								</h3>
								<p className="text-gray-400">
									Boost visibility for specific tracks or artists while
									maintaining a natural listening experience.
								</p>
							</div>
						</div>
						<div className="space-y-6">
							<div className="space-y-2">
								<h3 className="text-xl font-semibold flex items-center">
									<Timer className="w-6 h-6 text-[#1DB954] mr-2" />
									Automated Scheduling
								</h3>
								<p className="text-gray-400">
									Set it and forget it. Schedule playlist refreshes at your
									desired frequency - daily, weekly, or custom intervals.
								</p>
							</div>
							<div className="space-y-2">
								<h3 className="text-xl font-semibold flex items-center">
									<Music2 className="w-6 h-6 text-[#1DB954] mr-2" />
									Genre Balancing
								</h3>
								<p className="text-gray-400">
									Maintain the perfect mix of genres and moods in your playlist
									automatically.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonial Section */}
			<section className="py-24 container mx-auto px-4">
				<blockquote className="max-w-3xl mx-auto text-center space-y-6">
					<p className="text-2xl md:text-3xl font-medium italic text-gray-300">
						&quot;Smart Shuffle has revolutionized how we manage our playlist
						rotation. It&apos;s an essential tool for maintaining fresh and
						engaging content for our millions of listeners.&quot;
					</p>
					<footer className="text-[#1DB954]">
						<p className="font-semibold">Lofi Girl Team</p>
						<p className="text-sm text-gray-400">25M+ Subscribers</p>
					</footer>
				</blockquote>
			</section>

			{/* FAQ Section */}
			<section className="py-24 container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
					Frequently Asked Questions
				</h2>
				<div className="max-w-3xl mx-auto">
					<Accordion type="single" collapsible className="w-full">
						<AccordionItem value="item-1">
							<AccordionTrigger>How does Smart Shuffle work?</AccordionTrigger>
							<AccordionContent>
								Smart Shuffle uses advanced algorithms to create the perfect
								playlist order. It considers factors like track history, genre
								balance, and your custom rules to ensure a fresh and engaging
								listening experience every time.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value="item-2">
							<AccordionTrigger>
								Can I use it with any Spotify playlist?
							</AccordionTrigger>
							<AccordionContent>
								Yes! Smart Shuffle works with any Spotify playlist you own or
								have editing rights to. Whether you&apos;re managing a personal
								playlist or a major branded channel, our tools adapt to your
								needs.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value="item-3">
							<AccordionTrigger>
								How often can I shuffle my playlists?
							</AccordionTrigger>
							<AccordionContent>
								Free users can manually shuffle their playlists unlimited times.
								Pro users get access to automated scheduling, allowing playlists
								to update automatically at custom intervals (daily, weekly, or
								any custom frequency).
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value="item-4">
							<AccordionTrigger>What are rotation rules?</AccordionTrigger>
							<AccordionContent>
								Rotation rules are custom settings that control how tracks
								appear in your playlist. You can set tracks to appear more
								frequently, schedule them for specific dates, or ensure certain
								genres maintain a balanced presence throughout your playlist.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value="item-5">
							<AccordionTrigger>
								Is there a limit to playlist size?
							</AccordionTrigger>
							<AccordionContent>
								No! You can use Smart Shuffle with playlists of any size, from
								small collections to massive libraries with thousands of tracks.
								Our system is optimized to handle playlists of all sizes
								efficiently.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value="item-6">
							<AccordionTrigger>
								Is my Spotify data safe and secure?
							</AccordionTrigger>
							<AccordionContent>
								Absolutely! We only request the minimum permissions needed to
								manage your playlists. We never store your personal data or
								playlist content on our servers, and we&apos;re fully compliant
								with Spotify&apos;s security requirements and GDPR.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value="item-7">
							<AccordionTrigger>
								What happens if I cancel my subscription?
							</AccordionTrigger>
							<AccordionContent>
								Your playlists remain exactly as they are - you won&apos;t lose
								any changes. You&apos;ll simply revert to the free plan, which
								still includes unlimited manual shuffling. Your automated
								schedules will pause until you reactivate your subscription.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value="item-8">
							<AccordionTrigger>
								Can I undo a shuffle if I don&apos;t like the result?
							</AccordionTrigger>
							<AccordionContent>
								Yes! We maintain a history of your playlist versions. You can
								easily revert to any previous version with a single click,
								giving you complete control over your playlist management.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value="item-9">
							<AccordionTrigger>
								Will this affect my playlist&apos;s followers?
							</AccordionTrigger>
							<AccordionContent>
								No, shuffling your playlist won&apos;t affect your follower
								count or their ability to access your playlist. In fact, regular
								updates often increase engagement as followers discover fresh
								arrangements of your content.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value="item-10">
							<AccordionTrigger>
								Do you offer customer support?
							</AccordionTrigger>
							<AccordionContent>
								Yes! Free users get access to our help center and community
								forums. Pro users receive priority email support with responses
								within 24 hours, plus access to our dedicated customer success
								team for personalized assistance.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</section>

			{/* Bottom CTA Section */}
			<section className="py-24 bg-gradient-to-t from-[#1DB954] to-black">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-6">
						Ready to Revolutionize Your Playlist Experience?
					</h2>
					<p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
						Transform your playlists today
					</p>
					<Button
						size="lg"
						className="bg-white hover:bg-gray-100 text-black font-semibold px-8 py-6 rounded-full text-lg"
					>
						Get Started Free
						<ArrowRight className="ml-2 h-5 w-5" />
					</Button>
				</div>
			</section>
		</div>
	);
}
