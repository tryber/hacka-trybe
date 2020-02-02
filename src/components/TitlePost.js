import React from 'react';

class TitlePost extends React.Component {
  render() {
    const { category } = this.props;
    return (
      <div className="TitlePost">
        <div className="line-header">
          <div className="top">
            <h3>AjudaBH <span className="compartilhou">compartilhou</span> event</h3>
            <h6 className="tag">{category}</h6>
          </div>
        </div>

      </div>
    )
  }
}

export default TitlePost;
