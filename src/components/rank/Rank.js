import React from "react";

const Rank = ({userName, userRank}) => {
    return (
        <div>
            <div className="black f3">
                {`${userName}, your current rank is ...`}
            </div>
            <div className="blacks f1 mt4" >
                <b>{userRank}</b>
            </div>

        </div>
    )
}

export default Rank;