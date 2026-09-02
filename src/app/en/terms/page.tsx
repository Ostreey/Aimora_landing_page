import { FooterLocalized } from '@/components/FooterLocalized';
import { LegalLayout } from '@/components/LegalLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | Aimora',
    description: 'Rules for using the Aimora app, creating an account and purchasing Premium access.',
    robots: { index: true, follow: true },
    alternates: {
        canonical: '/en/terms',
        languages: {
            'pl': '/regulamin',
            'en': '/en/terms',
        },
    },
};

export default function TermsPage() {
    return (
        <LegalLayout
            title="Aimora App Terms of Service"
            updatedLabel="Effective from 30 August 2026"
            footer={<FooterLocalized locale="en" />}
        >
            <h2>1. Who provides the service</h2>
            <p>
                The service is provided by <strong>Dawid Ostrowski, trading as „DAVOSS”</strong>,
                ul. Leszczynowa 14, 87-125 Osiek nad Wisłą, Poland, VAT ID: PL9562250675, contact:{' '}
                <a href="mailto:biuro@aimora.pl">biuro@aimora.pl</a>.
            </p>

            <h2>2. Scope</h2>
            <p>
                These terms govern the use of the Aimora mobile app, the creation of an account and
                the purchase and operation of Premium access. They do not cover hardware sales, which
                are governed by separate agreements and sales documents.
            </p>

            <h2>3. Free version and Premium</h2>
            <p>The app works <strong>without an account and free of charge</strong>. Without an account you get:</p>
            <ul>
                <li>game modes: Easy Training, Time Attack, Max Hits and Hostage,</li>
                <li>
                    full hardware handling: connecting detectors, naming them, sensor calibration,
                    lighting settings and detector firmware updates,
                </li>
                <li>language and theme selection,</li>
                <li>game settings remembered on that device,</li>
                <li>
                    access to the history of completed tournaments together with the overall
                    standings — including after Premium access has expired.
                </li>
            </ul>
            <p><strong>Premium</strong> additionally unlocks:</p>
            <ul>
                <li>the Duel and Shoot-Off game modes,</li>
                <li>creating and running tournaments, including event templates,</li>
                <li>exporting tournament results as an image,</li>
                <li>cloud settings backup and moving settings between devices.</li>
            </ul>

            <h2>4. Your account</h2>
            <ol>
                <li>Creating an account is optional and requires an e-mail address and a password.</li>
                <li>The password must be at least 8 characters long.</li>
                <li>
                    You enter your e-mail address twice. It is the only way to recover a password,
                    so a typo means an account you can never get back into.
                </li>
                <li>
                    Use an address you actually have access to — it is used for password recovery and
                    for contact about Premium access.
                </li>
                <li>
                    Do not share your account with others. You are responsible for actions taken on
                    your account.
                </li>
                <li>
                    You may delete your account at any time in the app: side menu →{' '}
                    <strong>Account</strong> → <strong>Delete account</strong>. Deletion is irreversible
                    and removes the cloud settings backup. Data stored on the device remains.
                </li>
            </ol>

            <h2>5. How Premium is purchased</h2>
            <ol>
                <li>
                    <strong>There is no store or payment inside the app.</strong> The app contains no
                    in-app purchases and no automatically renewing subscription.
                </li>
                <li>
                    Premium access is purchased by contacting us through{' '}
                    <a href="https://aimora.pl">aimora.pl</a> or by writing to{' '}
                    <a href="mailto:biuro@aimora.pl">biuro@aimora.pl</a>. Terms, price and duration
                    are agreed individually and confirmed before the service begins.
                </li>
                <li>
                    Once paid, we assign the access to the account identified by your e-mail address.
                    The change becomes visible on the <strong>Account</strong> screen in the app.
                </li>
                <li>Premium does not renew by itself and we never charge you automatically.</li>
            </ol>

            <h2>6. Premium without an internet connection</h2>
            <p>
                The app is used at shooting ranges, where coverage is often missing. After you sign in,
                it remembers your entitlement locally and honours it for <strong>7 days</strong>{' '}
                offline. After that period a single connection to the internet is required to keep
                using Premium features.
            </p>
            <p>
                After <strong>2 days</strong> without confirmation the app shows a reminder to connect
                to the internet. The reminder blocks nothing — every feature keeps working until the
                7 days are up.
            </p>
            <p>
                The app compares the device clock with our server time. Setting an incorrect date on
                the device in order to circumvent access verification is a breach of section 9 of these
                terms.
            </p>

            <h2>7. What happens when access expires</h2>
            <p>
                When Premium expires you <strong>keep access to the history of completed tournaments
                and their overall standings</strong>. Creating and running new tournaments, exporting
                images and the Duel and Shoot-Off modes become unavailable. Data stored on your device
                is not deleted.
            </p>

            <h2>8. Technical requirements</h2>
            <ul>
                <li>a device running Android 7.0 or newer,</li>
                <li>
                    Bluetooth Low Energy support and location enabled — required by Android itself to
                    scan for Bluetooth devices,
                </li>
                <li>
                    an internet connection — needed only for sign-up, sign-in, settings backup and
                    detector firmware updates.
                </li>
            </ul>

            <h2>9. Rules of use</h2>
            <ol>
                <li>
                    The app is intended for shooting practice with Aimora equipment. Use it in
                    accordance with the law and with the rules of the range where you shoot.
                </li>
                <li>
                    Safety rules for handling firearms and equipment are described in the user manual.
                    The app does not replace training or supervision by an authorised person.
                </li>
                <li>
                    Do not tamper with the app, circumvent access controls or take actions that disrupt
                    its operation.
                </li>
                <li>
                    If you enter competitors&apos; details into a tournament, you are responsible for
                    the legal basis of processing them. That data stays on your device and is never
                    sent to us.
                </li>
            </ol>

            <h2>10. Right of withdrawal — consumers</h2>
            <p>
                If you purchase Premium as a consumer, or as a sole trader treated as a consumer, you
                may withdraw from the contract within <strong>14 days</strong> without giving a reason.
                Send your statement to <a href="mailto:biuro@aimora.pl">biuro@aimora.pl</a>.
            </p>
            <p>
                If you ask us to start providing the service before that period ends and expressly
                consent to it, acknowledging that you will lose the right of withdrawal once the
                service has been fully performed, that right expires upon full performance. If you
                withdraw while the service is ongoing, you pay for the part performed up to that point.
            </p>

            <h2>11. Complaints</h2>
            <ol>
                <li>
                    Send complaints to <a href="mailto:biuro@aimora.pl">biuro@aimora.pl</a>. Describe
                    the problem and include your account e-mail, device model and app version.
                </li>
                <li>We respond within 14 days of receiving the complaint.</li>
                <li>
                    Consumers may use out-of-court dispute resolution, including the EU ODR platform:{' '}
                    <a href="https://ec.europa.eu/consumers/odr" rel="noopener noreferrer" target="_blank">
                        ec.europa.eu/consumers/odr
                    </a>.
                </li>
            </ol>

            <h2>12. Liability</h2>
            <p>
                We make every effort to keep the app working correctly and without interruption. We are
                not liable for unavailability caused by failures of third-party providers, lack of
                network coverage or the behaviour of your device. We do not limit our liability where
                the law does not allow it — in particular for intentional damage and for consumer
                rights.
            </p>

            <h2>13. Changes to these terms</h2>
            <p>
                We may amend these terms for valid reasons: changes in law, changes to the scope of
                features or changes in how the service is provided. We will give at least 14 days&apos;
                notice by e-mail to the address linked to your account. If you do not accept the
                changes, you may delete your account before they take effect.
            </p>

            <h2>14. Personal data</h2>
            <p>
                How we handle personal data is described in our{' '}
                <a href="/en/privacy-policy">Privacy Policy</a>.
            </p>

            <h2>15. Governing law</h2>
            <p>
                Matters not covered here are governed by Polish law. This does not deprive consumers of
                the protection afforded by the mandatory provisions of the law of their country of
                habitual residence.
            </p>
        </LegalLayout>
    );
}
