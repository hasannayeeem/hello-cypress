const heading = () => {
    // start to checking HEADING
  const titleStyle = [
    { // h1 styles
        "font-size": "68px",
        "line-height": "72px",
        "font-family": `"Passion One Bold"`,
        "font-weight": "700",
        "color": "rgb(67, 55, 55)",
        "letter-spacing": "1px"
      },
      { // h2 styles
        "font-size": "60px",
        "line-height": "62px",
        "font-family": `"Passion One Regular"`,
        "font-weight": "400",
        "letter-spacing": "1px",
        "color": "rgb(146, 90, 53)"
      },
      { // h3 styles
        "font-size": "40px",
        "line-height": "46px",
        "font-family": `"Passion One Regular"`,
        "font-weight": "400",
        "letter-spacing": "0.8px",
        "color": "rgb(146, 90, 53)"
      },
      { // h4 styles
        "font-size": "34px",
        "line-height": "38px",
        "font-family": `"Passion One Regular"`,
        "font-weight": "400",
        "color": "rgb(146, 90, 53)"
      },
      { // h5 styles
        "font-size": "24px",
        "line-height": "28px",
        "font-family": `"Inter Bold"`,
        "font-weight": "700",
        "color": "rgb(19, 18, 18)"
      },
      {
        "text-align": "center",
        "color": "rgb(69, 128, 50)",
        "font-size": "20px",
        "line-height": "48px",
        "letter-spacing": "4px",
        "text-transform": "capitalize",
        "font-family": `"Inter Bold"`,
        "font-weight": "700",
        "text-decoration": "line-through wavy rgb(169, 31, 31)",
        "text-shadow": "rgb(28, 1, 1) 2px 2px 1px",
        "background-color": "rgb(218, 208, 208)"
      }
  ]
  for(let i=0; i<6; i++){
      cy.checkCssProperties(`.dorik-wrapper > h${i+1}`, titleStyle[i]);
    }
    cy.checkCssProperties(`.dorik-heading__dynamic`,{
        "color": "rgb(99, 22, 22)",
        "background-color": "rgb(238, 252, 72)",
        "text-decoration": "underline wavy rgb(99, 22, 22)"
      })
  };
  export default heading;