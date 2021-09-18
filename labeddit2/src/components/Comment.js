import React from 'react'
import { CommentCard, Text } from '../style/style'

export default function Comment(props) {
    return (
        <CommentCard buttonColor={props.deslikeColor}>
            <strong>{props.userName}</strong>
            <Text>{props.text}</Text>
            <section>
                <button onClick={props.positiveVote}>
                    <img src={props.likeIcon} />
                </button>
                <p>{props.numberOfVotes}</p>
                <button onClick={props.negativeVote}>
                    <strong>X</strong>
                </button>
            </section>
        </CommentCard>
    )
}