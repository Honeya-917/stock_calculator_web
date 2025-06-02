import React, { useState } from 'react';

function App() {
  const [buyPrice, setBuyPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [pe, setPe] = useState(0);

  const cost = buyPrice * quantity;
  const currentValue = currentPrice * quantity;
  const profit = currentValue - cost;
  const profitPercent = cost > 0 ? (profit / cost) * 100 : 0;

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>股票计算器</h1>
      <label>买入价格: <input type="number" value={buyPrice} onChange={e => setBuyPrice(+e.target.value)} /></label><br />
      <label>买入数量: <input type="number" value={quantity} onChange={e => setQuantity(+e.target.value)} /></label><br />
      <label>当前价格: <input type="number" value={currentPrice} onChange={e => setCurrentPrice(+e.target.value)} /></label><br />
      <label>公司市盈率（PE）: <input type="number" value={pe} onChange={e => setPe(+e.target.value)} /></label><br />
      <hr />
      <p>总成本: {cost.toFixed(2)} 元</p>
      <p>当前市值: {currentValue.toFixed(2)} 元</p>
      <p>盈亏: {profit.toFixed(2)} 元（{profitPercent.toFixed(2)}%）</p>
      <p>PE: {pe}</p>
    </div>
  );
}

export default App;
