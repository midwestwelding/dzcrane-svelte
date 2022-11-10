<div id="contact">
  <div class="contact-content">
    <h2>Contact</h2>
    <hr />
    <div class="contact-container">
      <div class="contact-column">
        <div class="contact-phone">
          <h3>Call Today!</h3>
          <p>Delvin Rens</p>
          <a href="tel:9209888013">(920) 988-8013</a>
        </div>
        <div class="contact-office">
          <h3>Business Office</h3>
          <p>202 Harrison Street</p>
          <p>PO Box 39</p>
          <p>Reeseville, WI 53098</p>
        </div>
      </div>
      <div class="contact-column">
        <div class="form-container">
          <form method="post" name="contactUs" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contactUs" />
            <div><input name="name" type="text" placeholder="Name" required /></div>
            <div><input name="email" type="text" placeholder="Email" required /></div>
            <div>
              <p>Message: </p>
              <textarea name="message" rows="5" />
            </div>
            <div style="text-align: right;">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
<style>
#contact {
  padding: 18px;
  color: white;
  background: #2a3895;
}
#contact h2 {
  text-align: center;
  font-size: 2.4em;
  margin-bottom: 12px;
}
#contact hr {
  width: 67%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 18px;
}
.contact-phone {
  text-align: center;
  margin-bottom: 36px;
}
.contact-phone h3 {
  font-size: 1.6em;
  margin-bottom: 12px;
}
.contact-phone p {
  font-size: 1.2em;
  line-height: 1.6em;
}
.contact-phone a {
  color: white;
  font-size: 1.2em;
  text-decoration: none;
  line-height: 1.6em;
}
.form-container input, .form-container textarea, .form-container p {
  font-size: 1.2em;
  width: 100%;
  margin-bottom: 8px;
}

button {
  font-size: 1.2em;
  background: #dd1f26;
  color: white;
  border: none;
  padding: 8px 18px;
}
.contact-office {
  margin: 36px 0;
}
.contact-office h3 {
  font-size: 1.6em;
  margin-bottom: 4px;
}
.contact-office p {
  font-size: 1.2em;
  line-height: 1.3em;
}

@media screen and (min-width: 768px) {
  #contact {
    padding-top: 54px;
    margin-left: auto;
    margin-right: auto;
  }
  .form-container, .contact-office {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
  }
}

@media screen and (min-width: 1024px) {
  .contact-content {
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
  }
  .contact-container {
    display: flex;
    justify-items: center;
  }
  .contact-column {
    width: 50%;
  }
}
</style>