import React from 'react'

import '../style/product.css'
import '../style/why.css'
import info from '../images/plastic_info.jpg'

export default function Why(){
  return(
    <div className='why background'>
      <h1 className='all-products'>
        Plastics in our Oceans
      </h1>
      <h2>
        The billions upon billions of items of plastic waste choking our oceans, lakes, and rivers and piling up on land is more than unsightly and harmful to plants and wildlife
      </h2>
      <h3>
        The following 10 facts shed light on how plastic is proving dangerous to our planet, health, and wildlife:
      </h3>
      <div className='facts-container'>
        <p>
          1 
          <br/>About 8 million metric tons of plastic are thrown into the ocean annually.
          <br/>
          Of those, 236,000 tons are microplastics--tiny pieces of broken-down plastic smaller than your little fingernail.
        </p>
        <p>
          2
          <br/>There are five massive patches of plastic in the oceans around the world. These huge concentrations of plastic debris cover large swaths of the ocean; the one between California and Hawaii, dubbed the Great Pacific Garbage Patch, is the size of the state of Texas.
        </p>
        <p>
          3
          <br/>Every minute, one garbage truck of plastic is dumped into our oceans.
        </p>
        <p>
          4
          <br/>The amount of plastic in the ocean is set to increase by tenfold by 2020.
        </p>
        <p>
          5
          <br/>Plastic is found in the ocean as far as 11km deep, meaning synthetic fibers have contaminated even the most remote places on Earth.
        </p>
        <p>
          6
          <br/>Many marine organisms cannot distinguish common plastic items from food.  Animals who eat plastic often starve because they cannot digest the plastic, but it fills their stomachs, preventing them from eating real food.
        </p>
        <p>
          7
          <br/>The likelihood of coral becoming diseased increases from 4% to 89% after coming into contact with marine plastic. 
          <br/>Plastic also damages the skin of the coral, allowing for infections to develop.  Coral reefs are home to more than 25% of marine life.
        </p>
        <p>
          8
          <br/>There is more plastic than natural prey at the sea surface of the Great Pacific Garbage Patch, which means that organisms feeding at this area are likely to have plastic as a major coponent of their diets.  For instance, sea turtles by-caught in fisheries operating within and around the patch can have up to 74% of their diets composed of ocean plastics.
        </p>
        <p>
          9
          <br/>Many of the fish that humans consume have at one time or another ingested plastic microfibers.
        </p>
        {/* <h3>
          What can you do to help?
        </h3> */}
        {/* <h2>
          1. Never buy single use plastic water bottles, bring your own
          2. Take reusable shopping bags to the grocery store
          3. Stop using plastic straws, use stainless steel instead
          4. Bring a to-go kit with you, with fork, spoon, container, straw, etc, when you get takeout
          5. Bring your own coffee mug
          6. Stop using disposable razors
          7. Use cloth diapers instead of disposables
          8. Give up gum.  It is made of synthetic rubber, which is plastic
          9. Do not use products that contain microbeads, ie: facewash
          10. Strive to convert your home to zero waste
        </h2> */}
      </div>
      <img className='why-infograph'src={info} alt='infograph'></img>
      <h1 className='all-products' style={{marginTop: '10px', marginBottom: '10px'}}>
        MORE RESOURCES:
      </h1>
        <div className='why-links-container'>
          <a className='why-links'    href='https://www.nationalgeographic.com/environment/planetorplastic/?beta=true' target='_blank' rel="noopener noreferrer">
            National Geographic
          </a>
          <a className='why-links' href='https://www.oceanblueproject.org/oceanfacts.html' target='_blank' rel="noopener noreferrer">
            Ocean Blue Project
          </a>
          <a className='why-links' href='https://oceanconservancy.org/trash-free-seas/plastics-in-the-ocean/' target='_blank' rel="noopener noreferrer">
            Ocean Conservancy
          </a>
        </div>
        <footer className='footer'>
          Zero Waste Shop since 2018 
            <a href='https://www.instagram.com/explore/tags/zerowasteshop/?hl=en' target='_blank' rel="noopener noreferrer">
              <i className="fab fa-instagram">
              </i>
            </a>
            <a href='https://www.facebook.com/search/str/zero+waste/keywords_search' target='_blank' rel="noopener noreferrer">
            <i className="fab fa-facebook-square">
              </i>
            </a>
        </footer>
    </div>
  )
}