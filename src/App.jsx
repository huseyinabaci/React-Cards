import "./App.css";
import "bulma/css/bulma.css";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Csharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";

function App() {
  return (
    <div>
      <section class="hero is-link">
        <div class="hero-body">
          <p class="title">Kurslarım</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div class="columns">
            <div class="column">
              <Course
                image={Angular}
                title="Angular"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, tempore cumque accusantium ad, tenetur laborum omnis praesentium error odio earum molestiae! Tempore quam a voluptates, nisi dolor ipsam qui unde."
              />
            </div>
            <div class="column">
              <Course
                image={Bootstrap}
                title="Bootstrap"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, tempore cumque accusantium ad, tenetur laborum omnis praesentium error odio earum molestiae! Tempore quam a voluptates, nisi dolor ipsam qui unde."
              />
            </div>
            <div class="column">
              <Course
                image={Csharp}
                title="C#"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, tempore cumque accusantium ad, tenetur laborum omnis praesentium error odio earum molestiae! Tempore quam a voluptates, nisi dolor ipsam qui unde."
              />
            </div>
            <div class="column">
              <Course
                image={KompleWeb}
                title="Frontend"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, tempore cumque accusantium ad, tenetur laborum omnis praesentium error odio earum molestiae! Tempore quam a voluptates, nisi dolor ipsam qui unde."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
