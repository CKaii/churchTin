import React from 'react';

const GroupDetails = () => {
  return (
    <div>
      <div className="ui containter">
        <div className="ui grid centered">
          <div className="ui row">
            <div className="eight wide column">
              <div className="ui form">
                <div className="field">
                  <label>Group Name</label>
                  <input type="text" />
                </div>
                <div className="field">
                  <label>Daily Goal</label>
                  <input type="text" />
                </div>
                <div class="field">
                  <label>Group Details</label>
                  <textarea></textarea>
                </div>
                <div class="field">
                  <label>Goal response</label>
                  <textarea></textarea>
                </div>
                <div>
                  <button class="ui right floated primary basic button">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetails;
