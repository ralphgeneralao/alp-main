import { NavLink } from 'react-router-dom';
// import Background from '../../../components/Background/Background';
import './TermsAndConditionsPage.scss';

function TermsAndConditionsPage() {
  return (
    <>
      {/* <Background /> */}
      <div className="terms-conditions-page-wrapper zindex-100">
        <div className="terms-conditions-page-content">
          <div className="terms-conditions-page-header text-center w-100">
            <h1>TERMS AND CONDITIONS</h1>
          </div>
          <div className="terms-container">
            <h3 className="header-blue header-m-btm">1. ABOUT THIS WEBSITE</h3>
            <div className="border-left-blue">
              <p>
                <strong>1.1</strong> This website: www.alearningplace.com.au and www.relationalmathematics.com.au (‘Website’) is
                owned and operated by A Learning Place A Teaching Place Pty Ltd ABN: 29 169 850 006 (‘ALPATP’, ‘we’, ‘us’ or
                ‘our’).
              </p>
              <p>
                <strong>1.2</strong> These Terms and Conditions (‘Terms’) govern use of this Website by the user (‘you’ or
                ‘your’).
              </p>
              <p>
                <strong>1.3</strong> In these Terms, ‘use’ or ‘using’ of this Website means:
              </p>
              <p className="terms-padding-left">
                <strong>(a)</strong> Visiting, browsing, accessing, downloading or otherwise using any part of this Website or any
                of its content, information, material, products, services, resources, benefits or features (‘Free Content’);
                and/or
              </p>
              <p className="terms-padding-left">
                <strong>(b)</strong> Registering for membership, subscribing, selecting, ordering, clicking ‘I agree’, making
                payment and purchasing ALPATPcontent, information, material, products, services, resources, benefits or features
                offered for sale on this Website (‘Member Content’).
              </p>
            </div>
          </div>
          <div className="terms-container">
            <h3 className="header-yellow header-m-btm">2. AGREEMENT TO THESE TERMS</h3>
            <div className="border-left-yellow">
              <p>
                <strong>2.1</strong> These Terms form a binding contractual agreement between you and ALPATP.
              </p>
              <p>
                <strong>2.2</strong> For that reason, these Terms are important and you should ensure that you read them carefully
                and contact us with any questions before you use this Website. You can contact us at{' '}
                <a href="mailto:info@alearningplace.com.au">info@alearningplace.com.au</a>.
              </p>
              <p>
                <strong>2.3</strong> By using any part of this Website, you acknowledge and agree that you have read, understood
                and accept to be bound by these Terms and our Privacy Policy <NavLink to="/agreement/privacypolicy">here</NavLink>
                . If you do not agree to these Terms or our Privacy Policy, you must immediately stop using this Website.
              </p>
            </div>
          </div>
          <div className="terms-container">
            <h3 className="header-green header-m-btm">3. MEMBERSHIP</h3>
            <div className="border-left-green">
              <p>
                <strong>3.1 Registration:</strong>
              </p>
              <p className="terms-padding-left">
                <strong>(a)</strong> In order to access Member Content, you are required to register for an account with ALPATP
                (‘Member Account’) either as an individual teacher, registering yourself as a single registered user (‘Teacher
                Member’); or as a school, registering 2 or more teachersas registered users (‘School Member’), including
                purchasing and making full payment for a subscription plan via this Website (‘Subscription Plan’).
              </p>
              <p className="terms-padding-left">
                <strong>(b)</strong> If you register a Member Account as a TeacherMember you may select an initial6-month or
                12-month Subscription Plan.If you register a Member Account as a School Member you may only select an
                initial12-month Subscription Plan (‘Initial Term’).
              </p>
              <p className="terms-padding-left">
                <strong>(c)</strong> By proceeding to register for a Member Account:
              </p>
              <p className="terms-padding-left">
                <strong>(i)</strong> You warrant and represent:
              </p>
              <p className="terms-padding-left-3">
                <strong>1.</strong> You are over 18 years of age;
              </p>
              <p className="terms-padding-left-3">
                <strong>2.</strong> You have the right, authority and full legal capacity to enter these Terms;
              </p>
              <p className="terms-padding-left-3">
                <strong>3.</strong> You have read, understood and accept these Terms and you agree to be bound by them;
              </p>
              <p className="terms-padding-left-3">
                <strong>4.</strong> If you are registering on behalf of a school as a School Member, that school has taken to have
                accepted these Terms and you are taken to have been duly authorised to bind the school; and
              </p>
              <p className="terms-padding-left-3">
                <strong>5.</strong> You are authorised to make payment via your selected payment method.
              </p>
              <p className="terms-padding-left">
                <strong>(ii)</strong> You warrant and represent that any personal, professional, paymentor other information you
                provide us is accurate, up-to-date and complete. You must notify us of any changes to your Member Account or to
                anyof your information within a timely manner; and
              </p>
              <p className="terms-padding-left">
                <strong>(iii)</strong> If you are registering on behalf of a school as a School Member, you warrant and represent
                you have been expressly authorised to disclose to us any personal, professional, paymentor other information of
                registered user/s nominated under your Member Account.
              </p>
              <p className="terms-padding-left">
                <strong>(d)</strong> In order to register a Member Account, you are required to provide ALPATP with:
              </p>
              <p className="terms-padding-left">
                <strong>(ii)</strong> Registered user/s’ personal information such as name, address, email address, phone number
                and location;
              </p>
              <p className="terms-padding-left">
                <strong>(iii)</strong> Registered user/s’ professional information such as school name, type, location, grade
                teaching, length of time teaching;
              </p>
              <p className="terms-padding-left">
                <strong>(iv)</strong> Information about how you heard about ALPATP;
              </p>
              <p className="terms-padding-left">
                <strong>(v)</strong> A username, being an email address;
              </p>
              <p className="terms-padding-left">
                <strong>(vi)</strong> A password; and
              </p>
              <p className="terms-padding-left">
                <strong>(vii)</strong> Full payment for the Subscription Plan.
              </p>
              <p className="terms-padding-left">
                <strong>(e)</strong> We will process personal information in accordance with our Privacy Policy.
              </p>
              <p className="terms-padding-left">
                <strong>(f)</strong> We will not be responsible for any delay or failure to process your registration if it is not
                completed properly or accurately.
              </p>
              <p className="terms-padding-left">
                <strong>(g)</strong> Once you have completed the registration process you will be either a Teacher Member or
                School Member and registered user/s nominated under your Member Account will be able to immediatelyaccess Member
                Content.
              </p>
              <p className="terms-padding-left">
                <strong>(h)</strong> You acknowledge and agree that we may send you marketing communications, including direct
                marketing by telephone, email messaging, mobile messaging (SMS/MMS), mail or any other forms of contact you supply
                to us. You may opt out of receiving marketing communications by notifying us by email to:{' '}
                <a href="mailto:info@alearningplace.com.au">info@alearningplace.com.au</a>, by replying ‘STOP’ to our email
                messages, or as indicated in our mobile messages (SMS/MMS).
              </p>
              <p>
                <strong>3.2 Cancellation of Subscription Plan:</strong>
              </p>
              <p className="terms-padding-left">
                <strong>(a)</strong> Early Cancellation by you:You may cancel your Subscription Plan within 24 hours of taking out
                the Subscription Plan by notifying us by email to:{' '}
                <a href="mailto:info@alearningplace.com.au">info@alearningplace.com.au</a>.
              </p>
              <p className="terms-padding-left">
                <strong>(b)</strong> Cancellation by us: We reserve the right in our sole and absolute discretion to cancel your
                Subscription Plan at any time, for breach of these Terms including non-payment for the Subscription Plan or for
                any other reason.
              </p>
              <p>
                <strong>3.3 Teacher Member – Auto-Renewal of Subscription Plan:</strong>
              </p>
              <p className="terms-padding-left">
                <strong>(a)</strong> A Subscription Plan will renew for subsequent terms of equivalent duration to the Initial
                Term of the Subscription Plan (‘Renewal Term’) automatically, unless a Teacher Member’s Subscription Plan is
                cancelled before the renewal date.
              </p>
              <p className="terms-padding-left">
                <strong>(b)</strong> We will send an email reminder(‘Renewal Email Reminder’) in relation to renewal and
                cancellation of a Subscription Plan to the email address recorded on a Teacher Member’s Member Account at
                intervals of 2 weeks, 1 week, and 1 day prior to the renewal date.
              </p>
              <p className="terms-padding-left">
                <strong>(c)</strong> If a Subscription Plan is not cancelled in accordance with the Renewal Email Reminder, a
                TeacherMember will be deemed to have accepted the Renewal Term and access to Member Content will continue for the
                Renewal Term for registered user/s nominated under a Teacher Member’s Member Account.
              </p>
              <p className="terms-padding-left">
                <strong>(d)</strong> Upon cancellation of a Subscription Plan in accordance with the Renewal Email Reminder,
                access to Member Content will cease at the end of the subscription period for registered user/s nominated under a
                Teacher Member’s Member Account and all data under the Member Account will be deleted.
              </p>
              <p>
                <strong>3.4 School Member – Renewal of Subscription Plan:</strong>
              </p>
              <p className="terms-padding-left">
                <strong>(a)</strong> We will send a Renewal Email Reminder in relation to renewal of a Subscription Plan to the
                email addresses recorded on a School Member’s Member Account at intervals of 1 month, 3 weeks, 2 weeks, 1 week, 6
                days, 5 days, 4 days, 3 days, 2 days and 1 day prior to the renewal date.
              </p>
              <p className="terms-padding-left">
                <strong>(e)</strong> If a School Member renews a Subscription Plan in accordance with the Renewal Email Reminder,
                access to Member Content will continue for the Renewal Term for registered users nominated under a School Member’s
                Member Account.
              </p>
              <p className="terms-padding-left">
                <strong>(f)</strong> If a School Member does not renew a Subscription Plan in accordance with the Renewal Email
                Reminder by the renewal date, access to Member Content will cease at the end of the subscription period for
                registered users nominated under a School Member’s Member Account and all data under the Member Account will be
                deleted.
              </p>
              <p>
                <strong>3.5 Your Obligations:</strong>
              </p>
              <p className="terms-padding-left">
                <strong>(a)</strong> As a user of Free Content,Teacher Member or School Member, you warrant and represent you and
                all registered user/s nominated under your Member Account will:
              </p>
              <p className="terms-padding-left-3">
                <strong>(i)</strong> Use yourMember Account, Free Content, Member Contentand this Website in a manner consistent
                with these Terms and with all applicable local, state, national and international laws, regulations, rules, codes
                or other legal obligations as well as with ALPATP’s policies and procedures;
              </p>
              <p className="terms-padding-left-3">
                <strong>(ii)</strong> Not transfer, sell or assign your Member Account, subscriptionor its benefits to any other
                party;
              </p>
              <p className="terms-padding-left-3">
                <strong>(iii)</strong> Not share your Member Account or Member Content with any other party. Member Content is
                solely for the use of registered users nominated under your Member Account. Subject to clause 3.5(b)(ii), only 1
                party can be a registered user
              </p>
              <p className="terms-padding-left-3">
                <strong>(iv)</strong> Be solely responsible for any information submittedvia your Member Account, including
                ensuring information is accurate, complete and up-to-date;
              </p>
              <p className="terms-padding-left-3">
                <strong>(v)</strong> Only identify students using a student identifier or another manner which does not personally
                identify a particular student outside of the school, and must not input any information or data which personally
                identifies any particular student outside of the school, including but not limited to a student’s name, address,
                date of birth or parents’ names;
              </p>
              <p className="terms-padding-left-3">
                <strong>(vi)</strong> Immediately change or edit information or data which personally identifies a particular
                student outside of the school, so as the student is not identifiable outside of the school;
              </p>
              <p className="terms-padding-left-3">
                <strong>(vii)</strong> Not access your Member Account or Member Content in a public place or public computer.
                Where you access your Member Account or Member Content on a shared computer, you must logout of your Member
                Account to ensure others cannot access your Member Account or Member Content;
              </p>
              <p className="terms-padding-left-3">
                <strong>(viii)</strong> Not use Free Content or Member Content in a way that infringes the copyright or
                proprietary interests in that content;
              </p>
              <p className="terms-padding-left-3">
                <strong>(ix)</strong> Not copy, produce, or distribute Free Content or Member Content to a third-party for
                commercial purposes;
              </p>
              <p className="terms-padding-left-3">
                <strong>(x)</strong> Not misuse Free Content or Member Content includingbut not limited to tampering, editing,
                converting or manipulatingthat content in anymanner, except in accordance with these Terms;
              </p>
              <p className="terms-padding-left-3">
                <strong>(xi)</strong> Only stream and must not download or convert Free Content or Member Content delivered in
                video format;
              </p>
              <p className="terms-padding-left-3">
                <strong>(xii)</strong> Not remove or obscure any copyright notice, licence notice or any other type of notice
                contained in Free Content or Member Content, except for scope and sequences where a school’s logo may replace
                ALPATP’s logo;
              </p>
              <p className="terms-padding-left-3">
                <strong>(xiii)</strong> Be solely responsible for the use or misuse of your Member Account or Member Content by
                another party;
              </p>
              <p className="terms-padding-left-3">
                <strong>(xiv)</strong> Not impersonate another Registered User or use the Member Account of another Registered
                User; and
              </p>
              <p className="terms-padding-left-3">
                <strong>(xv)</strong> Must maintain the security, integrity and confidentiality of your Member Account, including
                all activities under your Member Accountas well as login credentials, including the username and password. If you
                suspect the security, integrity or confidentiality of your Member Account has been compromised, you must notify us
                immediately by email to:
                <a href="mailto:info@alearningplace.com.au">info@alearningplace.com.au</a>.
              </p>
              <p className="terms-padding-left">
                <strong>(b)</strong> Specifically, as a Registered Schoolyou warrant and represent you will:
              </p>
              <p className="terms-padding-left-3">
                <strong>(i)</strong> Expressly nominate the registered users under your Member Account, and will at all times keep
                these details accurate, up-to-date and complete, including changing, adding, removing and replacing registered
                users under your Member Account. Where necessary, we will adjust the price of the Subscription Plan to reflectany
                increase in registered users during the subscription period and to reflect any decrease in registered users at the
                end of the Initial Term or Renewal Term; and
              </p>
              <p className="terms-padding-left-3">
                <strong>(ii)</strong> Obtain our express consent where a class is shared by more than 1 teacher, for these parties
                to be 1 registered user. Consent must be obtained by the School Member by sending an email to:{' '}
                <a href="mailto:info@alearningplace.com.au">info@alearningplace.com.au</a>.
              </p>
              <p>
                <strong>3.6 Free Content and Member Content:</strong>
              </p>
              <p className="terms-padding-left">
                <strong>(a)</strong> Free Content and Member Content is for general use as a teaching resource only, and does not
                consider personal circumstances or requirements. Free Content and Member Content is not intended to be a
                substitute for the education, instruction, teaching, training or schooling provided by a professional teacher.
                Accordingly, ALPATP is not liable for student performance or results.
              </p>
              <p className="terms-padding-left">
                <strong>(b)</strong> Free Content is defined in clause 1.3(a) and Member Content is defined in clause 1.3(b) and
                will be delivered in various formats including but not limited to PDF, Powerpoint and video formats.
              </p>
              <p className="terms-padding-left">
                <strong>(c)</strong> Access to Member Content is for the term of the Subscription Plan during the Initial Term or
                Renewal Term.
              </p>
              <p className="terms-padding-left">
                <strong>(d)</strong> Where registered user/s nominated under a Teacher Member’s or School Member’s Member Account
                access Member Content, registered user/s are granted a non-exclusive, non-transferable, limited licence to use
                that Member Content for personal, non-commercial and school use.
              </p>
              <p>
                <strong>3.7 ALPATP’s Rights:</strong>
              </p>
              <p className="terms-padding-left">
                <strong>(a)</strong> We reserve the right in our sole and absolute discretion to accept, refuse to provide or
                cancel a Member Account, Subscription Plan or Member Content or accept or refuse a registered user at any time and
                for any reason.
              </p>
              <p className="terms-padding-left">
                <strong>(b)</strong> We reserve the right in our sole and absolute discretion, with or without notice and at any
                time, to change the content, information, material, products, services, resources, benefits or features provided
                as Member Content and to limit the use of Member Content.
              </p>
              <p>
                <strong>3.8 Pricing:</strong>
              </p>
              <p className="terms-padding-left">
                <strong>(a)</strong> All prices are stated in Australian Dollars (AUD) and are exclusive of GST as defined in the
                A New Tax System (Goods and Services Tax) Act 1999 (Cth).
              </p>
              <p className="terms-padding-left">
                <strong>(b)</strong> We reserve the right to alter, amend or modify our prices, in our sole and absolute
                discretion, at any time.
              </p>
              <p>
                <strong>3.8 Pricing:</strong>
              </p>
              <p className="terms-padding-left">
                <strong>(a)</strong> Payment for the selected Subscription Plan for the Initial Term and Renewal Term must be made
                in full and in advance.
              </p>
              <p className="terms-padding-left">
                <strong>(b)</strong> Teacher Members must make payment for a Subscription Plan via this Website by credit card. If
                a Subscription Plan is not cancelled prior to the renewal date,as set out in clause 3.3,and in accordance with the
                Renewal Email Reminder, payment for the Renewal Term will be automatically processed by credit card on the renewal
                date.
              </p>
              <p className="terms-padding-left">
                <strong>(c)</strong> School Members must make payment for a Subscription Plan either via this Website by credit
                card or byelectronic funds transfer to our nominated bank account within 7 days of registration, renewal or as
                otherwise requested by us. If payment is not received within 28 days of registration, renewal or as otherwise
                requested by us, we reserve the right in our sole and absolute discretion to cancel a Subscription Plan and access
                to Member Content will cease for registered users nominated under a School Member’s Member Account and all data
                under the Member Account will be deleted.
              </p>
              <p className="terms-padding-left">
                <strong>(d)</strong> All payment transactions via this Website are processed by our third-party service provider,
                Stripe Payments Australia Pty Ltd (‘Stripe’) using a secure payment system which encrypts and protects financial
                data.
              </p>
              <p className="terms-padding-left">
                <strong>(e)</strong> We do not store credit card or payment information on our servers.
              </p>
              <p className="terms-padding-left">
                <strong>(f)</strong> You must be the owner or authorised holder of any credit card used for payment. If you use a
                credit card which does not belong to you, you warrant and represent that you have express prior consent of the
                authorised credit card account holder and you indemnify ALPATP in accordance with these Terms.
              </p>
              <p className="terms-padding-left">
                <strong>(g)</strong> ALPATP will provide a tax invoice to the email addresses recorded on a Teacher Member’s or
                School Member’s Member Account upon receipt of payment. Tax invoices will also be available under ‘My Account’.
              </p>
            </div>
          </div>
          <div className="terms-container">
            <h3 className="header-purple">4. WEBSITE CONTENT</h3>
            <div className="border-left-purple">
              <p>
                <strong>4.1</strong> We take proper care and precaution to ensure that all content, information, material,
                products, services, resources, benefits or featuresoffered on this Website is accurate and up-to-date.
              </p>
              <p>
                <strong>4.2</strong> We reserve the right to alter, amend, modify, restrict, terminate or suspend any of the
                content, information, material, products,services, resources, benefits or featuresmade available on this Website,
                in our sole and absolute discretion, from time to time, without notice to you.
              </p>
              <p>
                <strong>4.3</strong> Linked Sites and User Generated Content:
              </p>
              <p className="terms-padding-left">
                <strong>(a)</strong> This Website may contain links to other websites, which are owned or operated by
                third-parties (‘Linked Sites’) as well as content added by people other than us (‘User Generated Content’).
              </p>
              <p className="terms-padding-left">
                <strong>(b)</strong> We do not control, endorse, recommend, sponsor or approve Linked Sites or User Generated
                Content. We are not responsible or liable for content, information, material, products, services, resources,
                benefits or features on Linked Sites or in User Generated Content, nor for its legality, originality and
                copyright, nor for any associated person, organisation, operator, product or service.
              </p>
              <p className="terms-padding-left">
                <strong>(c)</strong> Linked Sites are provided for information purposes only, which you may access in your sole
                and absolute discretion.
              </p>
              <p className="terms-padding-left">
                <strong>(d)</strong> Linked Sites are not subject to these Terms or to ALPATP’s Privacy Policy. Accordingly, you
                should check the terms and privacy policy contained on any Linked Sites you visit.
              </p>
              <p className="terms-padding-left">
                <strong>(e)</strong> Linking to this Website is not permitted. We reserve the right to prevent third-parties from
                linking to this Website.
              </p>
            </div>
          </div>
          <div className="terms-container">
            <h3 className="header-red">5. WEBSITE USE</h3>
            <div className="border-left-red">
              <p>
                <strong>5.1</strong> We grant you a non-exclusive, worldwide, non-transferable licence to use this Website in
                accordance with the terms and conditions set out in these Terms.
              </p>
              <p>
                <strong>5.2</strong> You may access and use this Website, including any incidental copying that occurs as part of
                that use, in the normal manner and may also print one copy of any page within this Website for your own personal,
                non-commercial and school use.
              </p>
              <p>
                <strong>5.3</strong> You acknowledge and agree that:
              </p>
              <p className="terms-padding-left">
                <strong>(a)</strong> We retain complete editorial control over this Website. We reserve the right to alter, amend,
                modify, restrict, terminate or suspend operation of this Website, in our sole and absolute discretion, from time
                to time, without notice to you.
              </p>
              <p className="terms-padding-left">
                <strong>(b)</strong> This Website will not operate on a continuous basis, and may be unavailable from time to
                time, including for maintenance purposes.
              </p>
              <p>
                <strong>5.4</strong> You acknowledge and agree to access and use this Website:
              </p>
              <p className="terms-padding-left">
                <strong>(a)</strong> In accordance with these Terms and with all applicable local, state, national and
                international laws, regulations, rules, codes or other legal obligations.
              </p>
              <p className="terms-padding-left">
                <strong>(b)</strong> For personal, non-commercial and school use only.
              </p>
              <p className="terms-padding-left">
                <strong>(c)</strong> In a manner that takes the necessary precautions to ensure the process you use to access this
                Website does not expose you to vulnerabilities, viruses, defects or other harmful components that may damage your
                own computer system.
              </p>
              <p className="terms-padding-left">
                <strong>(d)</strong> In a manner that does not damage, incapacitate, circumvent security, place unreasonable
                burden or otherwise disrupt the operation of this Website or the servers or networks that host this Website, nor
                interfere with any other party’s use of this Website.
              </p>
              <p>
                <strong>5.5</strong> You must not add any content to this Website unless you hold all necessary rights, licences
                and consents to do so.
              </p>
              <p>
                <strong>5.6</strong> You must not send unsolicited communications, advertising or promotional material, including
                spam, junk mail, chain letters or pyramid schemes to us. This includes use of contact information provided on this
                Website. Nor must you spam or send unsolicited communications, advertising or promotional materials to any other
                party.
              </p>
              <p>
                <strong>5.7</strong> You acknowledge and agree not to access and use this Website in a manner that:
              </p>
              <p className="terms-padding-left">
                <strong>(a)</strong> Would cause you or us to breach any local, state, national and international law, regulation,
                rule, code or other legal obligation.
              </p>
              <p className="terms-padding-left">
                <strong>(b)</strong> Is or could reasonably be considered to be obscene, inappropriate, defamatory, tortuous,
                disparaging, indecent, seditious, offensive, pornographic, harmful, threatening, abusive, stalking, harassing,
                liable to incite racial hatred, discriminatory, blasphemous or otherwise offensive. This includes using this
                Website to communicate, publish or distribute any material of such nature.
              </p>
              <p className="terms-padding-left">
                <strong>(c)</strong> Violates the rights of any third-party.
              </p>
              <p className="terms-padding-left">
                <strong>(d)</strong> Misleads, deceives, invades or is in breach of another’s privacy or confidentiality.
              </p>
              <p className="terms-padding-left">
                <strong>(e)</strong> Infringes the copyright, trade marks or other intellectual property rights of any
                third-party.
              </p>
              <p className="terms-padding-left">
                <strong>(f)</strong> BringsALPATP, its directors, officers, employees, agents or contractors into disrepute, or
                brings this Website into disrepute.
              </p>
              <p className="terms-padding-left">
                <strong>(g)</strong> Gives the impression that content derives from ALPATP, its directors, officers, employees,
                agents or contractors.
              </p>
              <p className="terms-padding-left">
                <strong>(h)</strong> Scrapes, indexes, reproduces, redistributes or republishes any part of this Website.
              </p>
              <p className="terms-padding-left">
                <strong>(i)</strong> Accesses, scrapes or archives content such as scripting software, using automated means.
              </p>
              <p className="terms-padding-left">
                <strong>(j)</strong> Distributes or links to any malware or malicious code, including computer viruses, worms,
                trojan horses, logic bombs, spyware, adware or any other program that may disrupt, destroy, damage, harm, limit,
                circumvent security measures, or cause undesirable effects to the functionality of computer software, hardware,
                networks or telecommunications systems.
              </p>
              <p className="terms-padding-left">
                <strong>(k)</strong> Manipulates, alters or circumvents and prices listed on this Website.
              </p>
              <p>
                <strong>5.8</strong> We reserve the right to remove any content, information or material from this Website,
                ALPATP’s blog and/or any social media platforms we manage, which is found to be in breach of these Terms,
                copyright or any other intellectual property rights, or which we deem in our reasonable opinion to be illegal
                and/or inappropriate.
              </p>
              <p>
                <strong>5.9</strong> We reserve the right to notify the relevant law enforcement authority regarding any
                fraudulent or illegal activity in the use of this Website.
              </p>
            </div>
          </div>
          <div className="terms-container">
            <h3 className="header-blue">6. INTELLECTUAL PROPERTY RIGHTS</h3>
            <div className="border-left-blue">
              <p>
                <strong>6.1</strong> ALPATP reserves all rights in relation to intellectual property on this Website.
              </p>
              <p>
                <strong>6.2</strong> You acknowledge and agree that, as between you and ALPATP, we own or licence all intellectual
                property featured or displayed on this Website, including but not limited to content, graphics, design, text,
                images, icons, videos, layout, appearance, logos, distinctive brand features, trademarks and software. This
                intellectual property is protected by Australian and international laws.
              </p>
              <p>
                <strong>6.3</strong> Use of this Website and its content is for personal, non-commercial and school use only.
                Except as may be otherwise indicated on this Website, you are authorised to view, play, print and download content
                contained on this Website for personal, informational, non-commercial and school purposes only.
              </p>
              <p>
                <strong>6.4</strong> Your use of this Website is subject to the Copyright Act 1968 (Cth) and any other similar
                laws. Except as permitted by applicable laws and in accordance with these Terms, you must not use, replicate,
                reproduce, publish, licence, store, convey, distribute, transmit, transfer, display, perform, create derivative
                works from, alter, modify or sell any part of this Website or its content, information, material, products,
                services, resources, benefits or features, without our prior express written consent, or in the case of
                third-party material, without the copyright owner’s prior express written consent.
              </p>
              <p>
                <strong>6.5</strong> The names, logos or badges of any other organisations and/or their associated products or
                services contained on this Website may be trademarks of their respective owners and are used under licence with
                their consent.
              </p>
              <p>
                <strong>6.6</strong> By posting or adding any contentontothis Website, ALPATP’s blog and/or any social media
                platforms we manage, you automatically grant us a perpetual, irrevocable, non-exclusive, royalty-free, worldwide
                and transferrable right and licence to use, copy, display and distribute the content in any way, to create
                derivative works of the content, or incorporate the content in other works so as to publish and promote the
                content, and permit us to authorise any other party to do the same thing. This includes, without limitation,
                publishing testimonials, comments, feedback, ideas or suggestions on this Website, ALPATP’sblog and/or any social
                media platforms we manage.
              </p>
              <p>
                <strong>6.7</strong> You consent to any act or omission which would otherwise constitute an infringement of your
                moral rights, and if you add any content in which any third-party has moral rights, you must also ensure that the
                third-party also consents in the same manner.
              </p>
              <p>
                <strong>6.8</strong> The licence in clause 6.7 will survive any termination of these Terms.
              </p>
              <p>
                <strong>6.9</strong> You expressly warrant and represent to us that you have all necessary rights to grant the
                licences and consent set out in clauses 6.7 and 6.8.
              </p>
            </div>
          </div>
          <div className="terms-container">
            <h3 className="header-yellow">7. WARRANTIES</h3>
            <div className="border-left-yellow">
              <p>
                <strong>7.1</strong> You expressly warrant and represent to us that:
              </p>
              <p className="terms-padding-left">
                <strong>(a)</strong> You are 18 years of age or over, and have full legal capacity to enter these Terms.
              </p>
              <p className="terms-padding-left">
                <strong>(b)</strong> You have had sufficient opportunity to access, read, understand and accept these Terms.
              </p>
              <p className="terms-padding-left">
                <strong>(c)</strong> You will comply with these Terms and use this Website in accordance with these Terms and with
                all applicable laws, only for lawful purposes.
              </p>
              <p className="terms-padding-left">
                <strong>(d)</strong> All information you supply ALPATP through this Website is true, accurate, complete and
                up-to-date.
              </p>
            </div>
          </div>
          <div className="terms-container">
            <h3 className="header-green">8. LIMITATION OF LIABILITY AND DISCLAIMER</h3>
            <div className="border-left-green">
              <p>
                <strong>8.1</strong> This Website is provided on an ‘as is’ basis.We do not make any warranties or representations
                of any kind, express or implied, about the content, information, material or products offered on this Website or
                any Linked Sites, or to the accuracy, availability, reliability, completeness, contemporariness, performance or
                relevance of any such content, information, material, products, services, resources, benefits or features, except
                as otherwise provided by applicable laws.
              </p>
              <p className="terms-padding-left">
                <strong>(a)</strong> Damages for loss of profits, use, data, goodwill, interruption of business, or any other
                intangible losses arising from or connected with the use, performance or reliability of this Website or any Linked
                Sites.
              </p>
              <p className="terms-padding-left">
                <strong>(b)</strong> Delay or inability to use or rely on this Website or any Linked Sites.
              </p>
              <p className="terms-padding-left">
                <strong>(c)</strong> Unauthorised access to this Website or any Linked Sites.
              </p>
              <p className="terms-padding-left">
                <strong>(d)</strong> Alteration of any transmission of data.
              </p>
              <p className="terms-padding-left">
                <strong>(e)</strong> Any other matter related to this Website or any Linked Sites.
              </p>
              <p>
                <strong>8.3</strong> You acknowledge and agree that we are not liable for any alterations, amendments,
                modifications, restrictions or suspension of the content, information, material, products, services, resources,
                benefits or featuresmade available on this Website or on Linked Sites.
              </p>
              <p>
                <strong>8.4</strong> To the full extent permitted by applicable laws, we do not guarantee or accept any legal
                liability arising from or connected to the accuracy, availability, reliability, completeness, contemporariness,
                performance or relevance of content, information, material, products, services, resources, benefits or features
                contained on this Website or any Linked Sites.
              </p>
              <p>
                <strong>8.5</strong> The content, information, material, products, services, resources, benefits or
                featuresoffered on this Website is for general use only. Reliance on any content on this Website is entirely at
                your own risk.
              </p>
              <p>
                <strong>8.6</strong> We do not make any warranties or representations that this Website or any Linked Sites is
                free from vulnerabilities, viruses, defects or other harmful components that may damage your own computer system.
              </p>
              <p>
                <strong>8.7</strong> We do not guarantee secure or uninterrupted access to this Website or any Linked Sites, and
                are not liable for unsecure or interrupted access resulting from technical difficulties beyond our control.
              </p>
              <p>
                <strong>8.8</strong> The opinions and views expressed on ALPATP’s blog and/or any social media platforms we manage
                reflect the personal opinions and views of the individual author and not the opinions or views of ALPATP.
              </p>
              <p>
                <strong>8.9</strong> You assume full responsibility for the information you supply us. You acknowledge and agree
                that neither you nor any third-party may hold ALPATP liable for any inaccuracies, errors, omissions, faults,
                delays, loss or damage caused by incorrect information you supply us.
              </p>
              <p>
                <strong>8.10</strong> This clause will survive any termination of these Terms.
              </p>
            </div>
          </div>
          <div className="terms-container">
            <h3 className="header-purple">9. INTELLECTUAL PROPERTY RIGHTS</h3>
            <div className="border-left-purple">
              <p>
                <strong>9.1</strong> We acknowledge that certain legislation including the Australian Consumer Law (‘ACL’) in the
                Competition and Consumer Act 2010 (Cth) and similar consumer protection laws may provide you with certain rights,
                warranties and remedies relating to our supply of goods and services to you, which cannot be excluded, restricted
                or modified.
              </p>
              <p>
                <strong>9.2</strong> Nothing in these Terms excludes your consumer rights under the ACL. We provide all of the
                consumer guarantees contained in the ACL. Where there is a breach of any of the applicable consumer guarantees
                contained in the ACL, then to the full extent permitted by applicable laws, we limit our liability in respect of
                any claim to, at our option:
              </p>
              <p className="terms-padding-left">
                <strong>(a)</strong> In the case of goods, replacement of goods or supply of equivalent goods, repair of goods,
                payment of the cost of replacing goods or acquiring equivalent goods, or payment of having goods repaired; and
              </p>
              <p className="terms-padding-left">
                <strong>(b)</strong> In the case of services, supply of services again, orpayment of the cost of having services
                supplied again.
              </p>
              <p>
                <strong>9.3</strong> To the full extent permitted by applicable laws, we exclude all warranties, representations,
                terms and guarantees, whether express or implied, with the exception of those expressly set out in these Terms and
                your rights under the ACL.
              </p>
              <p>
                <strong>9.4</strong> This clause will survive any termination of these Terms.
              </p>
            </div>
          </div>
          <div className="terms-container">
            <h3 className="header-red">10. INDEMNITY</h3>
            <div className="border-left-red">
              <p>
                <strong>10.1</strong> You assume full responsibility and agree to indemnify, defend and hold ALPATP, its
                directors, officers, employees, agents or contractors harmless for and against any and all liability or expense
                which may arise from all kinds of claims, liabilities, actions, proceedings, suits, judgements, losses, damages,
                litigation costs and legal fees resulting directly or indirectly from:
              </p>
              <p className="terms-padding-left">
                <strong>(a)</strong> Your use of this Website or any damage you may cause to this Website.
              </p>
              <p className="terms-padding-left">
                <strong>(b)</strong> Your registration for a Member Account including the provision of credit card details for
                payment.
              </p>
              <p className="terms-padding-left">
                <strong>(c)</strong> Any information you provide, either through this Website or otherwise, that is not accurate,
                complete or up-to-date, or is misleading or a misrepresentation.
              </p>
              <p className="terms-padding-left">
                <strong>(d)</strong> Your breach of these Terms.
              </p>
              <p className="terms-padding-left">
                <strong>(e)</strong> Any misuse of our services by you, your employees, agents or contractors.
              </p>
              <p className="terms-padding-left">
                <strong>(f)</strong> Your breach of any law or third-party rights.
              </p>
              <p>
                <strong>10.2</strong> You agree to cooperate with us, at your own expense, in the handling of disputes,
                complaints, investigations or litigation that arise as a result of your use of this Website or our services,
                including but not limited to disputes, complaints, investigations or litigation that arise out of or relate to
                incorrect information you have given us.
              </p>
              <p>
                <strong>10.3</strong> This clause will survive any termination of these Terms.
              </p>
            </div>
          </div>
          <div className="terms-container">
            <h3 className="header-blue">11. PRIVACY</h3>
            <div className="border-left-blue">
              <p>
                <strong>11.1</strong> We respect your privacy and are committed to protecting your personal information in
                accordance with the Privacy Act 1988 (Cth). Please read the Privacy Policy provided{' '}
                <NavLink to="/agreement/privacypolicy">here</NavLink>.
              </p>
              <p>
                <strong>11.2</strong> Our Privacy Policy supports the Australian Privacy Principles and sets out the basis on
                which we collect, use, store and disclose your personal information, as well as your rights to access your
                personal information, and how you can contact us about our privacy practices.
              </p>
            </div>
          </div>
          <div className="terms-container">
            <h3 className="header-yellow">12. TERMINATIONS</h3>
            <div className="border-left-yellow">
              <p>
                <strong>12.1</strong> We reserve the right in our sole and absolute discretion to suspend or terminate your access
                to this Website at any time, for any reason, including but not limited to breach of these Terms. Such suspension
                or termination will not affect neither party’s rights or liabilities.
              </p>
              <p>
                <strong>12.2</strong> These Terms terminate automatically if, for any reason, we cease to operate this Website.
              </p>
              <p>
                <strong>12.3</strong> We may otherwise terminate these Terms immediately, on notice to you, if you have breached
                these Terms in any way.
              </p>
              <p>
                <strong>12.4</strong> If you breach these Terms, we reserve the right to take all necessary action, including
                legal action, to enforce our rights against you. All rights not expressly granted in these Terms are reserved.
              </p>
            </div>
          </div>
          <div className="terms-container">
            <h3 className="header-green">13. EVENTS BEYOND CONTROL</h3>
            <div className="border-left-green">
              <p>
                <strong>13.1</strong> Neither party will be liable to one another for any loss caused by any failure to observe
                these Terms where such failure is occasioned by causes beyond a party’s reasonable control, including but not
                limited to fire, flood, riot, strike, war, restrictions and prohibitions or any other actions by any government or
                semi government authorities.
              </p>
            </div>
          </div>
          <div className="terms-container">
            <h3 className="header-purple">14. SEVERABILITY</h3>
            <div className="border-left-purple">
              <p>
                <strong>14.1</strong> If any part of these Terms is deemed invalid or unenforceable, then those parts may be
                severed and the other parts of these Terms will remain unaffected and continue in full force and effect.
              </p>
            </div>
          </div>
          <div className="terms-container">
            <h3 className="header-red">15. GOVERNING LAW</h3>
            <div className="border-left-red">
              <p>
                <strong>15.1</strong> These Terms are governed by the laws of New South Wales, Australia.
              </p>
              <p>
                <strong>15.2</strong> You acknowledge and agree that the courts of New South Wales have exclusive jurisdiction to
                settle any claim or dispute which may arise out of or in relation to this Website or these Terms.
              </p>
            </div>
          </div>
          <div className="terms-container">
            <h3 className="header-blue">16. ENTIRE AGREEMENT</h3>
            <div className="border-left-blue">
              <p>
                <strong>16.1</strong> These Terms and our Privacy Policy comprise the entire agreement and understanding between
                you and ALPATP on everything connected with the subject matter of these Terms, and supersede any prior
                understanding, discussion, arrangement, representation, agreement or warranty, whether written or oral, and will
                have effect from the date of these Terms.
              </p>
            </div>
          </div>
          <div className="terms-container">
            <h3 className="header-yellow">17. UPDATES TO THESE TERMS</h3>
            <div className="border-left-yellow">
              <p>
                <strong>17.1</strong> These Terms were last updated on 3 February 2020.
              </p>
              <p>
                <strong>17.2</strong> These Terms replace any other Website terms published by us to date.
              </p>
              <p>
                <strong>17.3</strong> We reserve the right to alter, amend, modify or otherwise update these Terms in our sole and
                absolute discretion, from time to time, without notice to you.
              </p>
              <p>
                <strong>17.4</strong> Updates will be effective immediately upon publication on this Website. You should check
                this page from time to time to make sure you are aware of any updates.
              </p>
              <p>
                <strong>17.5</strong> By continuing to use this Website after publication of any updates, you acknowledge and
                agree that you have read, understood and accept to be bound by these Terms as altered, amended, modified or
                otherwise updated.
              </p>
            </div>
          </div>
          <div className="terms-container">
            <h3 className="header-green">18. GENERAL</h3>
            <div className="border-left-green">
              <p>
                <strong>18.1</strong> You must not assign, sub-licence or otherwise deal in any other way with any of your rights
                under these Terms.
              </p>
              <p>
                <strong>18.2</strong> Each party must at its own expense do everything reasonably necessary to give full effect to
                this agreement and the events contemplated by it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TermsAndConditionsPage;
