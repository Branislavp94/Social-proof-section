import './App.scss';
import iconStar from '../src/images/icon-star.svg';
import cart1Image from '../src/images/image-colton.jpg';
import cart2Image from '../src/images/image-irene.jpg';
import cart3Image from '../src/images/image-anne.jpg';

function App() {
	return (
		<main>
			<section className="challenge2__container">
				<section className="content__container">
					<section className="top__content">
						<section className="left__content">
							<h1 className="h1">10,000+ of our users love our products.</h1>
							<p className="p1">
								{' '}
								We only provide great products combined with excellent customer service. See what our
								satisfied customers are saying about our services.
							</p>
						</section>
						<section className="right__content">
							<article className="article1">
								<section className="star">
									<img src={iconStar} alt="iconstar" />
									<img src={iconStar} alt="iconstar" />
									<img src={iconStar} alt="iconstar" />
									<img src={iconStar} alt="iconstar" />
									<img src={iconStar} alt="iconstar" />
								</section>
								<section className="text">
									<p className="p2"> Rated 5 Stars in Reviews</p>
								</section>
							</article>

							<article className="article1">
								<section className="star">
									<img src={iconStar} alt="iconstar" />
									<img src={iconStar} alt="iconstar" />
									<img src={iconStar} alt="iconstar" />
									<img src={iconStar} alt="iconstar" />
									<img src={iconStar} alt="iconstar" />
								</section>
								<section className="text">
									<p className="p2"> Rated 5 Stars in Report Guru</p>
								</section>
							</article>

							<article className="article1">
								<section className="star">
									<img src={iconStar} alt="iconstar" />
									<img src={iconStar} alt="iconstar" />
									<img src={iconStar} alt="iconstar" />
									<img src={iconStar} alt="iconstar" />
									<img src={iconStar} alt="iconstar" />
								</section>
								<section className="text">
									<p className="p2"> Rated 5 Stars in BestTech</p>
								</section>
							</article>
						</section>
					</section>
					<section className="down_container">
						<section className="artical__down__container">
							<article className="card" id="card1">
								<section className="card__header">
									<img src={cart1Image} alt="colton" />
									<section className="card__header__text">
										<p> Colton Smith</p>
										<span> Verified Buyer</span>
									</section>
								</section>
								<section className="card__text">
									<p>
										"We needed the same printed design as the one we had ordered a week prior. Not
										only did they find the original order, but we also received it in time.
										Excellent!"
									</p>
								</section>
							</article>

							<article className="card" id="card2">
								<section className="card__header">
									<img src={cart2Image} alt="colton" />
									<section className="card__header__text">
										<p> Irene Roberts</p>
										<span> Verified Buyer</span>
									</section>
								</section>
								<section className="card__text">
									<p>
										"Customer service is always excellent and very quick turn around. Completely
										delighted with the simplicity of the purchase and the speed of delivery."
									</p>
								</section>
							</article>

							<article className="card" id="card3">
								<section className="card__header">
									<img src={cart3Image} alt="colton" />
									<section className="card__header__text">
										<p> Anne Wallace</p>
										<span> Verified Buyer</span>
									</section>
								</section>
								<section className="card__text">
									<p>
										"Put an order with this company and can only praise them for the very high
										standard. Will definitely use them again and recommend them to everyone!"
									</p>
								</section>
							</article>
						</section>
					</section>
				</section>
			</section>
		</main>
	);
}

export default App;
