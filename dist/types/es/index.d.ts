import { Aggregation as _Aggregation } from './aggregation';
import { Bool as _Bool } from './bool';
import { Exists as _Exists } from './exists';
import { Fuzzy as _Fuzzy } from './fuzzy';
import { GeoDistance as _GeoDistance } from './geodistance';
import { Ids as _Ids } from './ids';
import { Match as _Match } from './match';
import { MatchAll as _MatchAll } from './match_all';
import { Query as _Query } from './query';
import { Range as _Range } from './range';
import { Prefix as _Prefix } from './prefix';
import { Raw as _Raw } from './raw';
import { Regex as _Regex } from './regex';
import { Sort as _Sort } from './sort';
import { SortGeo as _SortGeo } from './sort_geo';
import { Term as _Term } from './term';
import { Terms as _Terms } from './terms';
import { Type as _Type } from './type';
import { Wildcard as _Wildcard } from './wildcard';
export declare namespace ES {
    const Aggregation: typeof _Aggregation;
    const Bool: typeof _Bool;
    const Exists: typeof _Exists;
    const Fuzzy: typeof _Fuzzy;
    const GeoDistance: typeof _GeoDistance;
    const Ids: typeof _Ids;
    const Match: typeof _Match;
    const MatchAll: typeof _MatchAll;
    const Prefix: typeof _Prefix;
    const Query: typeof _Query;
    const Range: typeof _Range;
    const Raw: typeof _Raw;
    const Regex: typeof _Regex;
    const Sort: typeof _Sort;
    const SortGeo: typeof _SortGeo;
    const Term: typeof _Term;
    const Terms: typeof _Terms;
    const Type: typeof _Type;
    const Wildcard: typeof _Wildcard;
}
