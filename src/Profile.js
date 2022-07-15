
import './App-profile.css'
export default function Profile() {
  return (
    <div className='main-container' >

      <div className="bg">
        <img class="bg-img"
          src="https://img.freepik.com/free-vector/pink-flower-frame-background-with-watercolor_65186-2566.jpg?w=360"
          alt="" />
        <div className="edit">
          <p className="edit-wp">Edit wallpaper</p>
        </div>
      </div>

      <div className="profile">
        <img className="profile-pic" src="https://i.pinimg.com/736x/88/ce/ba/88ceba92f64a3e77af1d5811f151d449.jpg"
          alt="profile-pic" />
      </div>


      {/* <div className="cont"> */}
      <div className='cont' >
        <div className="info">
          <h3 className="name">Chandri Anggara</h3>
          <p className="post">Junior UI/UX Designer</p>
          <ul className="info-list">
            <li className="main-info">Figura Malta</li>
            <li className="main-info">Female / ID: 45rd34fh</li>
            <li className="main-info">Seeking: no data</li>
            <li className="main-info">2022-02-03</li>
          </ul>

          <div className="my-pics">
            <h3 className="heading-pics">
              My pictures
            </h3>
            <img className="my-pics-style"
              src="https://i.pinimg.com/736x/88/ce/ba/88ceba92f64a3e77af1d5811f151d449.jpg" alt="" />
            <img className="my-pics-style"
              src="https://i.pinimg.com/736x/88/ce/ba/88ceba92f64a3e77af1d5811f151d449.jpg" alt="" />
            <img className="my-pics-style"
              src="https://i.pinimg.com/736x/88/ce/ba/88ceba92f64a3e77af1d5811f151d449.jpg" alt="" />
          </div>

        </div>

        <div className="my-profile">
          <h3 className="my-prof-heading">My profile</h3>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Personal information
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until
                  the collapse plugin adds the appropriate classes that we use to style each element.
                  These classes control the overall appearance, as well as the showing and hiding via CSS
                  transitions. You can modify any of this with custom CSS or overriding our default
                  variables. It's also worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  About me
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default,
                  until the collapse plugin adds the appropriate classes that we use to style each
                  element. These classes control the overall appearance, as well as the showing and hiding
                  via CSS transitions. You can modify any of this with custom CSS or overriding our
                  default variables. It's also worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Looking for
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until
                  the collapse plugin adds the appropriate classes that we use to style each element.
                  These classes control the overall appearance, as well as the showing and hiding via CSS
                  transitions. You can modify any of this with custom CSS or overriding our default
                  variables. It's also worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cont2">

<div className="more-dets">
    <h3 className="more-dets-heading">More details</h3>

    <div className="wrapper-tabs">
    <p className="heading-tab1">Appearance</p>
    <p className="heading-tab">Personality</p>
    <p className="heading-tab">Background</p>
    <p className="heading-tab">Life style</p>
    <p className="heading-tab">Language</p>
    <p className="heading-tab">Domain</p>
    </div>


    <div className="more-dets-table" >
        <div className="more-dets-table">
            <table cellspacing="5px">
                <tr>
                    <td>Height</td>
                    <td>155</td>
                </tr>

                <tr>
                    <td>Body look</td>
                    <td>Attractive</td>
                </tr>

                <tr>
                    <td>Body type</td>
                    <td>Skinny</td>
                </tr>

                <tr>
                    <td>Body weight</td>
                    <td>45kgs</td>
                </tr>

                <tr>
                    <td>Disability</td>
                    <td>None</td>
                </tr>

                <tr>
                    <td>Eye wear</td>
                    <td>Glasses</td>
                </tr>

                <tr>
                    <td>Facial hair</td>
                    <td>None</td>
                </tr>

                <tr>
                    <td>Hair color</td>
                    <td>Brown</td>
                </tr>

                <tr>
                    <td>Skin tone</td>
                    <td>Fair</td>
                </tr>

                <tr>
                    <td>Disability</td>
                    <td>None</td>
                </tr>

                <tr>
                    <td>Hair type</td>
                    <td>Straight</td>
                </tr>

                <tr>
                    <td>Hair length</td>
                    <td>Long</td>
                </tr>
            </table>
        </div>
    </div>
    
</div>


</div>


    </div>


  )
}
