import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import MyListComponent from "./List";

// function Champion() {
//   return (
//     <p>
//       Champion never bows to pressure but I must prevail in this Software
//       engineering journey
//     </p>
//   );
// }

// function ListItems() {
//   return;
//   const items = ["emmanuel", "Esther", "Ayibo"];
//   const lists = items.map((item) => {
//     return <li>{item}</li>;
//   });
// }
// const App = () => {
//   return (
//     <section className="mainpage">
//       <Champion />
//       <ul>
//         <ListItems />
//       </ul>
//     </section>
//   );
// };

function App() {
  const items = ["Emmanuel", "Esther", "Ayibo"];
  const listItems = items.map((item) => {
    return <li key={item}> {item} </li>;
  });
  return (
    <body>
      <div className="head">
        <Header />
      </div>
      <main>
        <section className="mainpage">
          <MyListComponent/>
        </section>
        <section className="mainpage">
          {/* <Champion /> */}
          
          <div>
            <h2>List of Items</h2>
            <ul>{listItems}</ul>
          </div>
        </section>
      </main>

      <div classname="main-footer">
        <Footer />
      </div>
    </body>
  );
}

export default App;
