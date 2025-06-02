import React, { useState } from "react";
import './index.css';

export default function StockCalculator() {
  const [stockPrice, setStockPrice] = useState(0);
  const [shares, setShares] = useState(0);
  const [eps, setEPS] = useState(0);
  const [bookValue, setBookValue] = useState(0);
  const [netProfit, setNetProfit] = useState(0);
  const [netAssets, setNetAssets] = useState(0);
  const [stopProfit, setStopProfit] = useState(0);
  const [stopLoss, setStopLoss] = useState(0);

  const buyAmount = stockPrice * shares;
  const profitAmount = (stopProfit - stockPrice) * shares;
  const lossAmount = (stockPrice - stopLoss) * shares;
  const pe = eps > 0 ? (stockPrice / eps).toFixed(2) : "-";
  const pb = bookValue > 0 ? (stockPrice / bookValue).toFixed(2) : "-";
  const roe = netAssets > 0 ? ((netProfit / netAssets) * 100).toFixed(2) + "%" : "-";

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <input type="number" placeholder="当前股价" onChange={e => setStockPrice(+e.target.value)} className="border p-2" />
        <input type="number" placeholder="买入股数" onChange={e => setShares(+e.target.value)} className="border p-2" />
        <input type="number" placeholder="每股收益 EPS" onChange={e => setEPS(+e.target.value)} className="border p-2" />
        <input type="number" placeholder="每股净资产" onChange={e => setBookValue(+e.target.value)} className="border p-2" />
        <input type="number" placeholder="净利润（万元）" onChange={e => setNetProfit(+e.target.value)} className="border p-2" />
        <input type="number" placeholder="净资产（万元）" onChange={e => setNetAssets(+e.target.value)} className="border p-2" />
        <input type="number" placeholder="止盈价格（可选）" onChange={e => setStopProfit(+e.target.value)} className="border p-2" />
        <input type="number" placeholder="止损价格（可选）" onChange={e => setStopLoss(+e.target.value)} className="border p-2" />
      </div>

      <div className="p-4 space-y-2 text-base border">
        <div>📌 买入总金额：<strong>{buyAmount.toFixed(2)} 元</strong></div>
        <div>💰 止盈收益：<strong>{profitAmount > 0 ? profitAmount.toFixed(2) + ' 元' : '-'} </strong></div>
        <div>📉 止损亏损：<strong>{lossAmount > 0 ? lossAmount.toFixed(2) + ' 元' : '-'}</strong></div>
        <div>📊 市盈率 PE：<strong>{pe}</strong></div>
        <div>📘 市净率 PB：<strong>{pb}</strong></div>
        <div>📈 ROE：<strong>{roe}</strong></div>
      </div>
    </div>
  );
}