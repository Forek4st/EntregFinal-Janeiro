import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Categoria1 = () => {
  return (
    <main className="mac-main">
      <div className="mac-greeting">
        <h1>Mac</h1>
        <p>
          If you can dream it, <br />
          Mac can do it.
        </p>
      </div>
      <div className="mac-video">
        <video
          className="welcome-video-video"
          muted
          playsInline
          loop
          preload="none"
          autoPlay
          role="img"
          aria-label="A video showcasing a lineup of Mac products: MacBook Air, 24-inch iMac in all seven colors, 2024 Mac mini, MacBook Pro, Studio Display, and Mac Studio"
          src="https://www.apple.com/105/media/us/mac/family/2024/b0f6d595-f4dd-4393-8316-102be97a5d1b/anim/welcome/xlarge_2x.mp4"
        ></video>
      </div>
      <article className="mac-container">
        <div className="mac-family">
          <h2>Explore the lineup.</h2>
          <div className="mac-family-cards">
            <Card style={{ width: "20rem" }}>
              <Card.Img
                variant="top"
                src="https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large_2x.png"
              />
              <Card.Body>
                <Card.Title>MacBook Pro 14” and 16”</Card.Title>
                <small>M4, M4 Pro, or M4 Max chip</small>
                <Card.Text>
                  The most advanced Mac laptops for demanding workflows.
                </Card.Text>
                <Button variant="primary">Mas informacion</Button>
                <Button variant="primary">Comprar</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "20rem" }}>
              <Card.Img
                variant="top"
                src="https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_large_2x.png"
              />
              <Card.Body>
                <Card.Title>MacBook Air 13” and 15”</Card.Title>
                <small>M2 or M3 chip</small>
                <Card.Text>
                  Strikingly thin and fast so you can work, play, or create
                  anywhere.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
                <Button variant="primary">Buy</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Categoria1;
