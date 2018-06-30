import React, { Component} from 'react';
import Radium from 'radium';
import Layout from '../../components/Layout/Layout';

	class AboutUs  extends Component {


  render() {

	const style = {
		color: "black",
       fontSize: "20px",
       cursor: "pointer",
       margin: "5%",
      ":hover": {
                fontSize: "30px", 
                }
      };

		return (
			<Layout >
				<p 
					style={style}
					key="1">

					This App came to life out of need to live within
					my available budget, all while being able to keep
					track of a list of items needed by every member in my 
					family with a clear budget in mind. It can be 
					daunting to try and keep it all in your mind, or 
					keeping more than one list without knowing how many 
					of those item you already purchased and how much money
					you have left to spend.
				</p>


				<p 
					style={style}
					key="2">

					This app can help you stay organized and dynamic
					through easily designed menus and forms.
				</p>

				<p 
					style={style}
					key="3">

					This app represents a virtual cash wallet system, 
					the ability to create a list of items you need and want 
					all while keeping your budget on track. A bit of planning 
					and can help you take control on how your money is spent.
				</p>

				<p
					style={style}
					key="4">

					For instance, if you have a long list of things you 
					need and want to buy for yourself, and you know you have 
					a certain amount of money allocated for it, than this app 
					help you out. This app will not only serve as a checklist
					for all those items, but also keep track of your assigned 
					budget by adjusting the total based on what you have 
					already purchased.
				</p>

				<p
					style={style}
					key="5">

					The power of this app comes into play even more when it
					comes to planning out your family’s expenditures, such as
					back to school purchases or seasonal clothes shopping. 
					You’ll be able to keep track of every family member and 
					their needed things to buy all while keeping track of the 
					items and budget available to your family.
				</p>
			</Layout>
		)
	}

}

export default Radium(AboutUs);
