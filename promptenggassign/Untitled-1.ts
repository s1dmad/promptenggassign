{
	type: "page",
	name: "Home",
	html_element : "div",
	styles: {
				width: "100vw",
				height: "100vh",
				font_color: "#fff",
				font_family: "Source Sans 3, sans-serif",
				display: "Flex",
				flex_direction: "columns",
				background: "Video url",
			}
	content:[
				{
					type: "organism",
					name: "Title Card",
					html_element: "div",
					styles: {
									
							}
					behavior:{},
					content: [
								{
									type: "Atom",
									name: “lg_session_title”,
									html_element: "h1",
									styles: {
												font_size: "80px",
												font_weight: "800",
												letter_spacing : "8px",	
											}
									content:{"WHO IS YOUR"}
								},

								{
									type: "Atom",
									name: “sub title”,
									html_element: "h1",
									styles: {
												font size: 50px rem
												Font weight: 600
												letter spacing : 8px	
											}
									content:"HERO ?"
								},

								{
									type: "Atom",
									name: “ls2 para”,
									html_element: "p",
									styles: {
												font_size: "1.7rem",
												font_weight: "400",
												letter_spacing: "2px"	
											}
									content:"Your skills can make an impact. Your fight can transform our world. Your will can turn a global challenge into your daily mission. Join forces with us and you can take on anything."
								}
							]


				},

				{
					type: "Molecule",
					name: “label”,
					html_element: "div",
					styles: {}
					content:[
								{
									type: "Atom",
									name: “button_text”,
									html_element: "h1",
									styles: {
												font_size: "1.0rem",
												font_weight: "400",
												letter spacing : "3px",	
											}
									
									content: "FIND THE JOB THAT'S RIGHT FOR YOU"
								}
								{
									type: "Atom",
									name: “button”,
									html_element: "button",
									styles: {
												font_size: "70px",	
												border_radius: "50%",
												color: "#000",
												background_color: "#fecc02",
												height: "70px",
												width: "70px",
											}
									behavior: {
												On click: {
													background_color: "#fff",
													color: "#000",
													the page anchor to the next page,
												}
											}	
									content: "icon class="fa-solid fa-chevron-down" ",
								}
							]
				}
				
			]
}

{
	type: "Organism",
	name: "Arc Carousel Container",
	html_element: "div",
	styles: {
				width:"100vw",
				height:"100vh",
				font_color: "#fff",
				font_family: "Source Sans 3 sans-serif",
				display : "flex",
				flex_direction: "columns",
				background:  "image url",
			}
	content: [
				{
					type: "Atom",
					name: "sub title",
					html_element: "h1",
					styles: {
								font_size: "26px",
								font_weight: "400",
								text_transform: "uppercase",
								color: "#fecc02",
								letter_spacing: "10px",
							}
					content:"CHOOSE YOUR CAREER",		

				},

				{
					type: "Atom",
					name: "md session title",
					html_element: "h1",
					styles: {
								font_size: "246px",
    							font_weight: "700",
								text_transform: "uppercase",
								color: "#ffffff",
								letter_spacing: "8px",
								line_height: "1",
								margin_bottom: "10px",
							}
					content:"HOW WOULD YOU DESCRIBE YOURSELF ?"
				},
				{
					type: "Atom",
					name: "ls1 para",
					html_element: "p",
					styles: {
								font-size: "23px",
    							font-weight: "500",
								letter-spacing: "1px",
								line-height: "1.5",
							}
					content:"Choose the one that BEST applies to receive the Operational <br> Occupational Specialties most suited to you. "
				},
				{
					type: "organism",
					name: "carousel",
					html_element: "div",
					styles: {
								display: "flex",
								flex_direction: "row",
							}
					content:[
								{
									type: "Molecule",
									name: "carousel-card",
									html_element: "div",
									styles: {
												display: "flex",
												flex_direction: "column",
												background : "Image url",
											}
									content:[
												{
													type: "Atom",
													name: "card-title",
													html_element: "h1",
													styles: {
																position: "absolute",
																top: "50px",
																left: "15px",
																font_size: "35px",
																font_weight: "500",
																color: "#fecc02",
																letter-spacing: "2px",
																width: "calc(100% - 40px)",
																margin: "0",
															}
													content:"SCIENTIST",
												},
												{
													type: "Atom",
													name: "divider",
													html_element: "div",
													styles: {
																width: "100%",
																height: "1px",
																background_color: "grey",
																position: "absolute",
																top: "130px",
																left: "0",
															}
													content:""
												},
												{
													type: "Atom",
													name: "card-paraq",
													html_element: "p",
													styles: {
																position: "absolute",
																top: "160px",
																left: "17px",
																color: "#fff",
																font-size: "20px",
																font-weight: "400",
																width: "calc(100% - 40px)",
																margin: "0",
															}
													content:"Are you passionate about caring for others and the discovery of medical cures?"
												},
												{
													type: "Atom",
													name: "label",
													html_element: "p",
													styles: {
																position: "absolute",
																bottom: "0",
																left: "0",
																width: "100%",
																height: "66px",
																background-color: "#fecc02",
																border: "none",
																border-radius: "5px",
																color: "#000",
																font-weight: "bold",
																font-size: "21px",
																cursor: "pointer",
															}
													content:"VIEW 43 JOBS"
												},

											]
								}

								 repeat this molecule 6 times

							]
				},
				
				{
					type: "Molecule",
					name: "carousel-nav",
					html_element: "div",
					styles: {
								display: "flex",
								flex_direction: "row",
								position: "absolute",
							}
					content:[
								{
									type: "Atom",
									name: "nav-item",
									html_element: "div",
									styles: {
												border: "#fff 1px solid",
												background-color: "rgba(0, 0, 0, 0)",
												width: "12px",
												height: "12px",
												border_radius: "50%",
												margin: "0 14px",
												opacity: "1",
												transition: "all .3s ease",
											}
									content:""
									behavior: {
												On click: {
												color: #fecc02;
												}
											  }
								},	

								repeat this atom 6 times
								 
							]	
				}
				
			]
}