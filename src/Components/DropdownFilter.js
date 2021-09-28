import React, { Component } from 'react'

export default class DropdownFilter extends Component {
    render() {
        return (
            <div class="dropdown">

        <select
         class="dropbtn"
          onChange={(e) => {
            this.props.dropDownMethod(e.target.value);
          }}
          aria-label="Filter Countries By Region">
          <option  value="All">Все турниры</option>
          <option  value="Текущий">Текущий</option>
          <option value="Будущий">Будущий</option>
        </select>

            </div>
    //     <nav>
	// 	<menu>
	// 		<menuitem id="demo1">
	// 			<a>drop</a>
	// 			<menu>
	// 				<menuitem><a>about</a></menuitem>
    //            <menuitem>
    //               <a>settings</a>
    //               <menu>
    //                   <select onChange={(e) => {
    //         this.props.dropDownMethod(e.target.value);
    //       }}>
    //                  <menuitem><option  value="All">Все турниры</option></menuitem>
    //                  <menuitem><option  value="Текущий">Текущий</option></menuitem>
    //                  <menuitem><option  value="Текущий">Текущий</option></menuitem>
    //                  <menuitem><option  value="Текущий">Текущий</option></menuitem>
    //                  </select>
    //               </menu>  
    //            </menuitem>
	// 			</menu>
	// 		</menuitem>
	// 	</menu>
	// </nav>
        )
    }
}
