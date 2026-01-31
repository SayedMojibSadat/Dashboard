import React from "react";

export function ButtonPreview() {
  return (
    <div className="flex flex-wrap gap-2">
      <button className="bg-blue-600 text-white px-4 py-2 rounded">HOME</button>
      <button className="bg-green-600 text-white px-4 py-2 rounded">LOGIN</button>
      <button className="bg-red-600 text-white px-4 py-2 rounded">DONATION</button>
      <button className="bg-yellow-500 text-white px-4 py-2 rounded">DOWNLOAD</button>
      <button className="bg-purple-600 text-white px-4 py-2 rounded">SHARE</button>
      <button className="bg-gray-600 text-white px-4 py-2 rounded">SUPPORT</button>
    </div>
  );
}

export function CardPreview() {
  return (
    <div className="bg-gray-800 text-white rounded shadow p-4 max-w-sm">
      <img
        src="/previews/paella.jpg"
        alt="Shrimp and Chorizo Paella"
        className="rounded mb-2"
      />
      <h4 className="font-bold">Shrimp & Chorizo Paella</h4>
      <p className="text-sm">
        This impressive paella is a perfect party dish and a fun meal to cook together with your guests.
        Add 1 cup of frozen peas along with the mussels, if you like.
      </p>
    </div>
  );
}

export function TablePreview() {
  return (
    <table className="w-full text-white border border-gray-700 text-sm">
      <thead className="bg-gray-700">
        <tr>
          <th className="px-2 py-1">Dessert</th>
          <th className="px-2 py-1">Calories</th>
          <th className="px-2 py-1">Fat</th>
          <th className="px-2 py-1">Carbs</th>
          <th className="px-2 py-1">Protein</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Frozen yoghurt</td><td>159</td><td>6</td><td>24</td><td>4</td></tr>
        <tr><td>Ice cream sandwich</td><td>237</td><td>9</td><td>37</td><td>4.3</td></tr>
        <tr><td>Eclair</td><td>262</td><td>16</td><td>24</td><td>6</td></tr>
        <tr><td>Cupcake</td><td>305</td><td>3.7</td><td>67</td><td>4.3</td></tr>
        <tr><td>Gingerbread</td><td>356</td><td>16</td><td>49</td><td>3.9</td></tr>
      </tbody>
    </table>
  );
}