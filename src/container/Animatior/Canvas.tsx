import { Component } from "react";
import PureCanvas from "../../components/PureCanvas/PureCanvas";

type Particle = {
  x: number;
  y: number;
  speed: number;
  direction: number;
  color: string;
  radius: number;
  vector: [number, number];
};

class Canvas extends Component<{ time: number }> {
  ctx!: CanvasRenderingContext2D;
  opts = {
    particleColor: "rgb(200,200,200)",
    lineColor: "rgb(200,200,200)",
    backgroundColor: "#121212",
    particleAmount: 30,
    defaultSpeed: 1,
    variantSpeed: 1,
    defaultRadius: 2,
    variantRadius: 2,
    linkRadius: 0.2,
  };
  particles: Particle[];
  constructor(props: any) {
    super(props);
    this.saveContext = this.saveContext.bind(this);
    this.particles = [];
  }

  createParticle = () => {
    const direction = Math.random() * 360;
    const speed =
      this.opts.defaultSpeed + this.opts.variantSpeed * Math.random();
    const w = this.ctx.canvas.width;
    const h = this.ctx.canvas.height;
    let particle: Particle = {
      x: Math.random() * w,
      y: Math.random() * h,
      speed: speed,
      direction: direction,
      color: this.opts.particleColor,
      radius: this.opts.defaultRadius,
      vector: [Math.cos(direction) * speed, Math.sin(direction) * speed],
    };
    return particle;
  };

  draw = (p: Particle) => {
    this.ctx.beginPath();
    this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    this.ctx.closePath();
    this.ctx.fillStyle = p.color;
    this.ctx.fill();
  };
  update = (p: Particle) => {
    this.border(p);
    p.x += p.vector[0];
    p.y += p.vector[1];
  };
  border = (p: Particle) => {
    const w = this.ctx.canvas.width;
    const h = this.ctx.canvas.height;
    if (p.x >= w || p.x <= 0) {
      p.vector[0] *= -1;
    }
    if (p.y >= h || p.y <= 0) {
      p.vector[1] *= -1;
    }
    if (p.x > w) p.x = w;
    if (p.y > h) p.y = h;
    if (p.x < 0) p.x = 0;
    if (p.y < 0) p.y = 0;
  };
  saveContext(ctx: any) {
    this.ctx = ctx;

    this.ctx.canvas.width = window.innerWidth;
    this.ctx.canvas.height = window.innerHeight;
    for (let i = 0; i < this.opts.particleAmount; ++i) {
      this.particles.push(this.createParticle());
    }
  }

  distance(x1: number, y1: number, x2: number, y2: number) {
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
  }

  linkPoints = (p: Particle) => {
    let rgb = this.opts.lineColor.match(/\d+/g)!;


    this.particles.forEach((particle) => {
      const d = this.distance(p.x, p.y, particle.x, particle.y);
      const opacity = 1 - d / (Math.min(window.innerWidth, window.innerHeight) * this.opts.linkRadius);
      if (opacity > 0) {
        this.ctx.lineWidth = 0.5;
        this.ctx.strokeStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
        this.ctx.beginPath();
        this.ctx.moveTo(p.x, p.y);
        this.ctx.lineTo(particle.x, particle.y);
        this.ctx.closePath();
        this.ctx.stroke();
      }
    });
  };
  componentDidUpdate() {
    this.ctx.fillStyle = this.opts.backgroundColor;
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.particles.forEach((particle) => {
      this.draw(particle);
      this.update(particle);
      this.linkPoints(particle);
    });
  }
  componentDidMount() {
    window.addEventListener("resize", (e) => {
      this.ctx.canvas.width = window.innerWidth;
      this.ctx.canvas.height = window.innerHeight;
    });
  }
  componentWillUnmount() {}
  render() {
    return <PureCanvas contextRef={this.saveContext} />;
  }
}

export default Canvas;
