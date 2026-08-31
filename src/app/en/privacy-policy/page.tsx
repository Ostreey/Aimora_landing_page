import { FooterLocalized } from '@/components/FooterLocalized';
import { LegalLayout } from '@/components/LegalLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Aimora',
    description: 'What data the Aimora app and aimora.pl collect, why we collect it, how long we keep it and what your rights are.',
    robots: { index: true, follow: true },
    alternates: {
        canonical: '/en/privacy-policy',
        languages: {
            'pl': '/polityka-prywatnosci',
            'en': '/en/privacy-policy',
        },
    },
};

export default function PrivacyPolicyPage() {
    return (
        <LegalLayout
            title="Privacy Policy"
            updatedLabel="Effective from 30 August 2026"
            footer={<FooterLocalized locale="en" />}
        >
            <h2>1. Who controls your data</h2>
            <p>
                The data controller is <strong>Dawid Ostrowski, trading as „DAVOSS”</strong>,
                ul. Leszczynowa 14, 87-125 Osiek nad Wisłą, Poland, VAT ID: PL9562250675.
            </p>
            <p>
                For anything related to personal data, write to{' '}
                <a href="mailto:biuro@aimora.pl">biuro@aimora.pl</a>.
            </p>
            <p>
                We have not appointed a data protection officer. Please direct all data protection
                matters to the address above.
            </p>

            <h2>2. What this policy covers</h2>
            <ul>
                <li><strong>aimora.pl</strong> — our website, including the contact form,</li>
                <li><strong>the Aimora mobile app</strong> (Shooting Buddy) for Android.</li>
            </ul>

            <h2>3. Using the app without an account</h2>
            <p>
                The Aimora app works <strong>without an account</strong>. In that mode we receive no
                data that could identify you. Game settings, detector names and training results stay
                in your device&apos;s memory.
            </p>
            <p>
                The app talks to the detectors locally over Bluetooth Low Energy. That traffic never
                goes through the internet.
            </p>

            <h2>4. What we process once you create an account</h2>
            <p>
                An account is optional and is only needed for Premium features and for moving your
                settings between devices. When you create one, we process:
            </p>
            <table>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Where it comes from</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>e-mail address</td>
                        <td>you provide it at sign-up</td>
                    </tr>
                    <tr>
                        <td>password</td>
                        <td>
                            stored only as an irreversible hash by Firebase Authentication —{' '}
                            <strong>we never see or have access to your password</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>account identifier and whether your e-mail has been confirmed</td>
                        <td>created automatically at sign-up</td>
                    </tr>
                    <tr>
                        <td>date of last app use and app version number</td>
                        <td>recorded automatically when you sign in</td>
                    </tr>
                    <tr>
                        <td>scope of your purchased Premium access and its expiry date</td>
                        <td>set by us once your access has been paid for</td>
                    </tr>
                    <tr>
                        <td>
                            game settings and app preferences (default number of detectors, hiding
                            names when exporting results)
                        </td>
                        <td>sent only when you use the cloud settings backup</td>
                    </tr>
                    <tr>
                        <td>
                            the number of completed tournaments and the date of the most recent one
                        </td>
                        <td>
                            counted in the app so we can see whether Premium access is actually
                            being used; we store neither tournament names nor competitor details
                        </td>
                    </tr>
                    <tr>
                        <td>
                            the difference between your device clock and our server time
                        </td>
                        <td>
                            recorded only when it exceeds 24 hours — used to verify the validity of
                            Premium access and for technical support
                        </td>
                    </tr>
                </tbody>
            </table>

            <h3>What stays on your device only</h3>
            <p>
                We do <strong>not</strong> receive: tournaments with their competitor lists and
                results, the history of completed events, tournament templates, the names you give
                your detectors, or the organiser logo. That data lives in the app and disappears when
                you uninstall it.
            </p>
            <p>
                This means that if you enter competitors&apos; names into a tournament,{' '}
                <strong>that data is never sent to us</strong>. You remain the controller of it as the
                event organiser.
            </p>

            <h2>5. Usage analytics</h2>
            <p>
                The app and the website use Google Analytics for Firebase. We collect events
                describing how the product is used (for example starting a game or opening a screen),
                device type and operating system version. This is used solely to improve the product
                and never for profiling that produces legal effects.
            </p>
            <p>
                While you are signed in, we attach your account identifier and whether the account
                has Premium to analytics events. This lets us see which features are actually used.
                We <strong>never send your e-mail address</strong> to analytics, nor the names of
                competitors entered into a tournament. Signing out removes the link between events
                and your account.
            </p>

            <h2>6. Purposes and legal bases</h2>
            <table>
                <thead>
                    <tr>
                        <th>Purpose</th>
                        <th>Legal basis (GDPR)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>running your account and providing Premium features</td>
                        <td>Art. 6(1)(b) — performance of a contract</td>
                    </tr>
                    <tr>
                        <td>synchronising settings between devices</td>
                        <td>Art. 6(1)(b) — performance of a contract</td>
                    </tr>
                    <tr>
                        <td>answering enquiries sent through the contact form</td>
                        <td>Art. 6(1)(f) — our legitimate interest</td>
                    </tr>
                    <tr>
                        <td>analytics and product improvement</td>
                        <td>Art. 6(1)(f) — our legitimate interest</td>
                    </tr>
                    <tr>
                        <td>account security and abuse prevention</td>
                        <td>Art. 6(1)(f) — our legitimate interest</td>
                    </tr>
                    <tr>
                        <td>verifying the validity of purchased Premium access</td>
                        <td>Art. 6(1)(b) — performance of a contract</td>
                    </tr>
                    <tr>
                        <td>invoicing and tax obligations</td>
                        <td>Art. 6(1)(c) — legal obligation</td>
                    </tr>
                </tbody>
            </table>

            <h2>7. Who processes data on our behalf</h2>
            <p>
                We do not sell your data and we do not share it for third-party marketing. We rely on
                the following processors:
            </p>
            <ul>
                <li>
                    <strong>Google Ireland Limited</strong> — Firebase Authentication, Cloud Firestore
                    and Google Analytics for Firebase (accounts, settings backup, analytics),
                </li>
                <li><strong>Vercel Inc.</strong> — hosting of aimora.pl,</li>
                <li><strong>Resend</strong> — delivery of contact form messages.</li>
            </ul>
            <p>
                Data may be transferred outside the European Economic Area, in particular to the
                United States. Such transfers rely on Standard Contractual Clauses approved by the
                European Commission or on an adequacy decision.
            </p>

            <h2>8. How long we keep data</h2>
            <ul>
                <li>
                    <strong>Account data</strong> — until you delete your account. Deletion also
                    removes the cloud settings backup and cannot be undone.
                </li>
                <li>
                    <strong>Correspondence</strong> — for as long as needed to handle the matter and
                    then until any related claims become time-barred.
                </li>
                <li><strong>Accounting records</strong> — for the period required by tax law.</li>
                <li>
                    <strong>Analytics data</strong> — according to the retention period configured in
                    Google Analytics for Firebase.
                </li>
            </ul>

            <h2>9. Your rights</h2>
            <p>You have the right to:</p>
            <ul>
                <li>access your data and receive a copy of it,</li>
                <li>have inaccurate data corrected,</li>
                <li>have your data erased,</li>
                <li>restrict processing,</li>
                <li>data portability,</li>
                <li>object to processing based on our legitimate interest,</li>
                <li>withdraw consent where processing is based on it,</li>
                <li>
                    lodge a complaint with the President of the Personal Data Protection Office
                    (ul. Stawki 2, 00-193 Warsaw, Poland) or with your local supervisory authority.
                </li>
            </ul>

            <h3>Deleting your account yourself</h3>
            <p>
                In the app open the side menu, choose <strong>Account</strong>, then{' '}
                <strong>Delete account</strong> and confirm with your password. The change is immediate
                and irreversible. Data stored only on the device, including tournament history, is left
                untouched. You can also write to{' '}
                <a href="mailto:biuro@aimora.pl">biuro@aimora.pl</a>.
            </p>

            <h2>10. Is providing data required</h2>
            <p>
                Providing data is voluntary. Without an e-mail address you cannot create an account,
                and therefore cannot use Premium features or the cloud settings backup. Every other
                feature of the app works without an account.
            </p>

            <h2>11. Age</h2>
            <p>
                Accounts may be created by people aged 16 or over. Younger users can use the app
                without an account or under an account created by a guardian.
            </p>

            <h2>12. Cookies on the website</h2>
            <p>
                aimora.pl uses cookies necessary for the site to function and analytics cookies linked
                to Google Analytics for Firebase. You can change cookie settings in your browser at any
                time.
            </p>

            <h2>13. Changes to this policy</h2>
            <p>
                We may update this policy when the app or the website changes. The current version is
                always available at this address and its effective date is shown at the top. We will
                notify you by e-mail about significant changes affecting accounts.
            </p>
        </LegalLayout>
    );
}
