import './QuestionTab.scss';
import SelectBox from './SelectBox';

function QuestionTab() {
  return (
    <>
      <div id="tab3" class="tab-pane fade" role="tabpanel">
        <div class="innerBox">
          <div class="form-background">
            <div class="form-white">
              <p class="questionText">문의하기</p>
              <form>
                <div class="w-40">
                  <div class="innerText">
                    <p>상품 및 옵션</p>
                    <input id="sub" type="checkbox" name="checkbox" />
                    <label for="sub">선택안함</label>
                  </div>

                  <SelectBox label="상품을 선택하세요.">
                    <li>goods1</li>
                    <li>goods2</li>
                    <li>goods3</li>
                  </SelectBox>

                  <p>이메일</p>
                  <input
                    class="form-input"
                    type="email"
                    placeholder="email@example.com"
                  />
                </div>

                <div class="w-40">
                  <p>문의내용</p>
                  <textarea class="form-input form-long"></textarea>
                </div>
                <div class="w-45">
                  <button class="red-button" type="submit" name="submit">
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionTab;
