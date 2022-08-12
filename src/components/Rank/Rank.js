import React from "react";

const Rank = ({ name, entries }) => {
    return (
            <div>
                <div className="f3">
                    {`${name}, your current entry count is...`}
                </div>
                <div className="f1">
                    {entries}
                </div>
            </div>
    );
}

// class Rank extends Component {
// 	constructor() {
// 		super()
// 		this.state = {
// 			emoji: ''
// 		}
// 	}

// 	componentDidMount() {
// 		this.generateEmoji(this.props.entries);
// 	}

// 	componentDidUpdate(prevProps, prevState) {
// 		if (prevProps.entries === this.props.entries) {
// 			return null
// 		}
// 		this.generateEmoji(this.props.entries)
// 	}

// 	generateEmoji = (count) => {
// 		fetch(`https://ctb7ghpy06.execute-api.us-east-1.amazonaws.com/dev/emoji?rank=${count}`)
// 			.then(response => response.json())
// 			.then(data => this.setState({emoji: data.input}))
// 			.catch(console.log)
// 	}

// 	render() {
// 		const { name, entries } = this.props;
// 		return (
// 			<div>
// 				<div className='f3'>
// 					{`${name}, your current entry count is...`}
// 				</div>
// 				<div className='f1'>
// 					{entries}
// 				</div>
// 				<div className= 'f3'>
// 					{`Rank badge: ${this.state.emoji}`}
// 				</div>
// 			</div>
// 		);
// 	}
// }


export default Rank;