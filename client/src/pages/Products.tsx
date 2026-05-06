import Layout from "@/components/Layout";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const productVisual = "/product-hero-clean.png";
const products = [];

export default function Products() {
  return (
    <Layout>
      <main className="page-shell products-page">
        <section className="subpage-hero products-hero">
          <div className="section-kicker">PRODUCTS</div>
          <h1>製品</h1>
        </section>
        <section className="content-container product-center-layout">
          <aside className="category-panel" aria-label="製品カテゴリ">
            <span>製品タイプ</span>
            <a href="#adhesive">貼付タイプ製品</a>
            <a href="#clip">打込タイプ製品</a>
            <Link href="/contact">すぐに相談する</Link>
          </aside>
          <div className="product-main">
            <div className="product-lead-card">
              <img src={productVisual} alt="バランスウェイト製品ラインアップ" loading="lazy" />
              <div>
                <span className="eyebrow">Wheel Balance Weight</span>
                <h2>車輪の動バランスを支える重要部品</h2>
                <p>
                  バランスウェイトは高速回転時の重量バランスを補正し、振動低減, タイヤ寿命, 足回り部品の保護に寄与します。
                  当社は中国本社の製造体制を背景に, 用途に応じた仕様提案を行います。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
