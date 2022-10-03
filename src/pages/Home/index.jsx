import lescone_icon from '../../assets/img/lescone.png';
import lescone_github from '../../assets/img/lescone-icone.png';
import lescone_img from '../../assets/img/foto.png';
import lescone_dish1 from '../../assets/img/prato-1.png';
import lescone_dish2 from '../../assets/img/prato-2.png';
import lescone_map from '../../assets/img/map.png';

function Home() {
	return (
		<>
			<main className="container intro">
				<div className="grid-5">
					<img className="logo" src={lescone_icon} alt="Le Scone" />
					<div className="intro-info">
						<p>
							De Seg. à Sab.<span className="open"></span>
							<br></br>das 07:00h às 18:00h
						</p>
						<p>
							Praia de Botafogo, 300
							<br></br>Rio de Janeiro - RJ
						</p>
					</div>
					<p className="intro-telephone">+55 099 99999-9999</p>
				</div>
				<div className="grid-7">
					<img
						className="intro-photo"
						src={lescone_img}
						alt="Le Scone image"
					/>
				</div>
			</main>
			<section className="container menu">
				<h1 className="grid-4 title">Menu</h1>
				<div className="grid-7 offset-1">
					<div className="menu-item">
						<img src={lescone_dish1} alt="dish one" />
						<h2>Entradas</h2>
						<ul>
							<li>
								<span>R$1,70</span>Ovos Mexidos
							</li>
							<li>
								<span>R$2,70</span>Scones de Frutas
							</li>
							<li>
								<span>R$3,70</span>Joelho de Queijo
							</li>
							<li>
								<span>R$4,70</span>Presunto Cozido
							</li>
							<li>
								<span>R$3,70</span>Coxinha de Frango
							</li>
						</ul>
					</div>
					<div className="menu-item">
						<img src={lescone_dish2} alt="dish one" />
						<h2>Entradas</h2>
						<ul>
							<li>
								<span>R$10,70</span>Penne com Queijo
							</li>
							<li>
								<span>R$20,70</span>Feijoada
							</li>
							<li>
								<span>R$13,70</span>Costela ao Molho
							</li>
							<li>
								<span>R$14,70</span>Medalhão de Frango
							</li>
							<li>
								<span>R$4,70</span>Coxinha de Catupiry
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="container contact">
				<h1 className="grid-4 title">Contato</h1>
				<div className="grid-7 offset-1">
					<form>
						<label>Nome</label>
						<input type="text" />
						<div className="row">
							<div className="grid-7">
								<label>E-mail</label>
								<input type="email" />
							</div>
							<div className="grid-5">
								<label>Telefone</label>
								<input type="text" />
							</div>
						</div>
						<label>Mensagem</label>
						<textarea></textarea>
						<button className="button" type="submit">
							Enviar
						</button>
						<div className="contact-info">
							<p>contato@lescone.com ////</p>
							<p>+55 099 99999-9999 //// </p>
						</div>
						<a href="#" className="contact-map">
							<img src={lescone_map} alt="map" />
						</a>
					</form>
				</div>
			</section>
			<footer>
				<div className="container information">
					<p>Le Scone © 1989 -2022. Alguns direitos reservados</p>
					<a
						href="https://github.com/thalesgomest/le-scone-origamid"
						target="_blank"
					>
						<img src={lescone_github} alt="github" />
					</a>
				</div>
			</footer>
		</>
	);
}
export default Home;
