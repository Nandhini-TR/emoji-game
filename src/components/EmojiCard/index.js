// Write your code here.
import './index.css'
import {Component} from 'react'

class EmojiCard extends Component {
  render() {
    const {emoji, onClickEmoji} = this.props
    const {emojiName, emojiUrl, id} = emoji

    const onclickEmojiItem = () => {
      onClickEmoji(id)
    }
    return (
      <li className="emoji-item" onClick={onclickEmojiItem}>
        <button className="emoji-button-style" key={id} type="button">
          <img src={emojiUrl} alt={emojiName} className="emoji-image" />
        </button>
      </li>
    )
  }
}

export default EmojiCard
