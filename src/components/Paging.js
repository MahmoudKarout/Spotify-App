import React, { Component } from 'react';
 
class Paging extends Component {

    constructor(props) {
        super(props);
        this.state = {
            offset: this.props.state.offset,
            totalItems: this.props.state.totalItems,
            limit: this.props.state.limit,
            pageNumber: this.props.state.pageNumber,
            start: this.props.state.start,
            end: this.props.state.end,

        };
        this.cancel = '';
    }
  


    GoToNextPage = () => {
        this.setState({
            offset: this.state.offset + this.state.limit,
            pageNumber: this.state.pageNumber + 1,
            start: false,
        },()=>{
            this.props.updatePage(this.state.offset);
        })
            
      

    }
    GoToPreviousPage = () => {
        this.setState({
            offset: this.state.offset - this.state.limit,
            pageNumber: this.state.pageNumber - 1,
            start: this.state.offset === 0 ? true : false,
            end: false
        }, () => {
            this.props.updatePage(this.state.offset);
        });


    }
    GoToFirstPage = () => {
        this.setState({
            offset: 0,
            pageNumber: 1,
            start: true,
            end: false
        }, () => {

            this.props.updatePage(this.state.offset);
        });
    }


    render() {

        return (
            <div className="paging">
                <p className="pageNum" >page {this.state.pageNumber}</p>
                <div className="pagesContainer">
                    {(this.state.pageNumber > 1 && !this.state.start) ? <button onClick={this.GoToFirstPage} > First Page </button> : <span></span>}
                    {this.state.pageNumber > 1 ? <button onClick={this.GoToPreviousPage}  > Previous  </button> : <span></span>}
                    {this.state.totalItems > this.state.limit ? <button onClick={this.GoToNextPage}  > Next  </button> : <span></span>}
                    {/* {(totalItems > limit && !end) ? <button onClick={this.GoToLastPage} >Last Page </button> : <span></span>} */}
                </div>
            </div>
        )
    }
}



export default Paging

