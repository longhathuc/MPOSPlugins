//
//  AppSettings.h
//  MobilePOS
//
//  Created by Dennis on 1/2/12.
//  Copyright (c) 2012 __MyCompanyName__. All rights reserved.
//


#import <Cordova/CDVPlugin.h>

@interface AppSettings: CDVPlugin{
	
}
@property (nonatomic, copy) NSString* callbackID;

- (void) getAppSettings:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;
- (void) setAppSettings:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

@end